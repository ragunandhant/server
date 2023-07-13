import Todo from '../model/Todo.js'
import UserModel from '../model/User.js';

export const addTodo = async (request,response) => {
    try {
        const newTodo = await Todo.create({
            data:request.body.data,
            createdAt:Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    }
    catch (error){
        return response.status(500).json(error.message);

    }
}

export const getAllTodos = async (request,response) => {
    try {
        

        const todos = await Todo.find({}).sort({'createdAt' : -1})

        return response.status(200).json(todos);
    }
    catch (error){
        return response.status(500).json(error.message);

    }
}

export const toggleTodoDone = async (request,response) => {
    try {
        
        const todoRef = await Todo.findById(request.params.id);
        
        const todo = await Todo.findOneAndUpdate(
            {_id:request.params.id},
            {done: !todoRef.done}
        )

        await todo.save();

        return response.status(200).json(todo);
    }
    catch (error){
        return response.status(500).json(error.message);

    }
}

export const updateTodo = async (request,response) => {
    try {
        
        
        
        await Todo.findOneAndUpdate(
            {_id:request.params.id},
            {data: request.body.data}
        )

        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    }
    catch (error){
        return response.status(500).json(error.message);

    }
}

export const deleteTodo = async (request,response) => {
    try {
        
        
        
        const todo = await Todo.findByIdAndDelete(request.params.id)



        return response.status(200).json(todo);
    }
    catch (error){
        return response.status(500).json(error.message);

    }
}


export const registerUser = (req, res) => {
    UserModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
  };
  
  // Function for user login
  export const loginUser = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("Success");
          } else {
            res.json("Incorrect password");
          }
        } else {
          res.json(`No user found with email ${email}`);
        }
      });
  };
  
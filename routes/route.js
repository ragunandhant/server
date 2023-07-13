import express from "express";

import { addTodo , getAllTodos , toggleTodoDone , updateTodo , deleteTodo, registerUser, loginUser } from "../controller/todo-controller.js";


const route = express.Router();

route.post('/todos',addTodo);
route.get('/todos',getAllTodos);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);
route.post('/register',registerUser)
route.post('/login',loginUser)
export default route; 
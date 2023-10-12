import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.modleware.js';
import { createTaskSchema } from '../schemas/task.schema.js'

const router = Router();

router.get('/tasks', authRequired,getTasks);  //obtener todo
router.get('/task/:id', authRequired, getTask); //obtener una
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask); //guardar
router.delete('/tasks/:id', authRequired, deleteTask); //eliminar
router.put('/task/:id', authRequired, updateTask); //actualizar

export default router;
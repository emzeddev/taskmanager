import express from 'express'
import TaskController from '../controllers/taskController.js'

const router = express.Router()

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTask);
router.put('/:id', TaskController.updateTask);
router.put('/status/:id', TaskController.updateStatus);
router.delete('/:id', TaskController.deleteTask);

export default router
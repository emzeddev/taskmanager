import Task from '../models/Task.js';

class TaskController {
    async createTask(req, res) {
        try {
          const task = await Task.create(req.body);
          res.status(201).json(task);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    }

    async getAllTasks(req , res) {
        try {
            const taskList = await Task.findAll()
            res.status(200).json(taskList)
        }catch(err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getTask(req , res) {
        try {
            const task = await Task.findByPk(req.params.id)
            if(task) {
                res.status(200).json(task)
            }else{
                res.status(404).json({ error: "Task not found" })
            }
        }catch(err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteTask(req , res) {
        try {
            const task = await Task.findByPk(req.params.id)
            if(task) {
                await task.destroy()
                res.status(204).send();
            }else {
                res.status(404).json({ error: "Task not found" })
            }
        }catch(err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateTask(req , res) {
        try {
            const task = await Task.findByPk(req.params.id)
            if(task) {
                await task.update({
                    title: req.body.title
                })

                res.status(200).json(task)
            }else {
                res.status(404).json({ error: "Task not found" })
            }
        }catch(err) {
            res.status(500).json({ error: err.message })
        }
    }

    async updateStatus(req , res) {
        try {
            const findTask = await Task.findByPk(req.params.id)
            if(findTask) {
                await findTask.update({
                    status: !findTask.status
                })

                res.status(200).json(findTask.status)
            }else {
                res.status(404).json({ error: "Task not found" })
            }
        }catch(err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default new TaskController()
import { randomUUID } from 'crypto';

const todo = [];

const addTask = (req, res) => {
    try {
        const { title, genero, assisti, linguage } = req.body;

        if (title === '' || genero === '' || assisti === '' || linguage === '') {
            return res.status(401).json({ message: 'Campos vazios!' });
        }

        const newTask = {
            id: randomUUID(),
            title,
            genero,
            assisti,
            linguage,
            created_at: new Date(),
        };

        todo.push(newTask);
        console.table(newTask)
        console.table(todo)
        return res.status(201).json({ data: newTask, message: 'Create task success!' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default {
    addTask,
};

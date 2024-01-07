import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const users = [];
const todos = [];



const listUser = async (req, res) => {
    return res.send(users);
};

const register = (req, res) => {
    try {
        const data = req.body;
        if (data.name === '' || data.senha === '') {
            return res.status(401).json({ message: 'Campos vazios!' });
        }

        const newUser = {
            id: users.length + 1,
            name: data.name,
            senha: data.senha,
        };


        users.push(newUser);

        return res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const login = (req, res) => {
    try {
        const { name, senha } = req.body;

        const user = users.find(item => item.name === name && item.senha === senha);

        if (user) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            console.log(token)
            return res.status(200).json({ message: 'Autenticado com sucesso', token: token });
        } else {
            return res.status(401).json({ message: 'Não autenticado!' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
export default {
    listUser,
    login,
    register
}
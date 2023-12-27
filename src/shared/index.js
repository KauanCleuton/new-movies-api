// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dbConnection from '../config/db.js';
import routes from '../config/routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(routes)

const port = process.env.PORT || 3000;

dbConnection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        throw err;
    }

    console.log('Successfully connected to the database.');
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port} - ${process.env.DB_NAME}`);
    });
});

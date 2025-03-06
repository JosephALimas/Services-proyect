const express = require('express');
const {Pool} = requiere('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
    user: '', // conseguir la información que se tiene del servidor
    host: '',
    database: '',
    passord: '',
    port: 5432,
});

app.get('', async (requestAnimationFrame, res) => {
    try{
        const{ rows } = await pool.query('') // poner el query para conseguir la información de la base de datos
        res.json(rows);
    } catch (err) {
        console.error(err);
    }
});
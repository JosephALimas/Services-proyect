// index.js
const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/users');
const serviceRoutes = require('./routes/services');
const bookingRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

app.listen(3001, () => {
  console.log('Servidor backend corriendo en http://localhost:3001');
});
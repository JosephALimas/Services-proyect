// controllers/bookingsController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
        service: {
          include: {
            provider: true,
            category: true
          }
        },
        category: true
      }
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bookings' });
  }
};

exports.createBooking = async (req, res) => {
  const { user_id, service_id, date, status, category_id } = req.body;
  try {
    const newBooking = await prisma.booking.create({
      data: { user_id, service_id, date, status, category_id }
    });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear booking' });
  }
};

exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { date, status } = req.body;
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: { date, status }
    });
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar booking' });
  }
};

exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.booking.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar booking' });
  }
};

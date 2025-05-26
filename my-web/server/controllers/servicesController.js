// controllers/servicesController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      include: {
        provider: true,
        category: true
      }
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
};

exports.createService = async (req, res) => {
  const { provider_id, title, description, category_id } = req.body;
  try {
    const newService = await prisma.service.create({
      data: { provider_id, title, description, category_id }
    });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear servicio' });
  }
};

exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, category_id } = req.body;
  try {
    const updatedService = await prisma.service.update({
      where: { id },
      data: { title, description, category_id }
    });
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar servicio' });
  }
};

exports.deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.service.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar servicio' });
  }
};



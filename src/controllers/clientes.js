// controllers/clientController.js
import { clienteSchema } from "../utils/validation.js";
import * as clientesModel from "../models/clientes.js";

// Obtener todos los clientes
export const getAllClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.getAllClientes();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await clientesModel.getClienteById(id);

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

// Crear un nuevo cliente
export const createCliente = async (req, res) => {
  const clienteData = req.body;
  try {
    // Validar los datos del cliente
    const validData = clienteSchema.parse(clienteData);

    const nuevoCliente = await clientesModel.createCliente(validData);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    if (error.errors) {
      res
        .status(400)
        .json({ error: "Datos de cliente no válidos", details: error.errors });
    } else {
      res.status(500).json({ error: "Error al crear el cliente" });
    }
  }
};

// Actualizar un cliente por ID
export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const clienteData = req.body;

  try {
    // Validar los datos del cliente
    const validData = clienteSchema.parse(clienteData);

    const clienteActualizado = await clientesModel.updateCliente(id, validData);

    if (clienteActualizado) {
      res.json(clienteActualizado);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error(error);
    if (error.errors) {
      res
        .status(400)
        .json({ error: "Datos de cliente no válidos", details: error.errors });
    } else {
      res.status(500).json({ error: "Error al actualizar el cliente" });
    }
  }
};

// Eliminar un cliente por ID
export const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const clienteEliminado = await clientesModel.deleteCliente(id);

    if (clienteEliminado) {
      res.json({ message: "Cliente eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
};

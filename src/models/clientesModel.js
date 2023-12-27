import pool from '../utils/database.js';

// Obtener todos los clientes
export const getAllClientes = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM clientes');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Obtener un cliente por ID
export const getClienteById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
    if (rows.length === 1) {
      return rows[0];
    } else {
      return null; // Cliente no encontrado
    }
  } catch (error) {
    throw error;
  }
};

// Crear un nuevo cliente
export const createCliente = async (clienteData) => {
  try {
    const [result] = await pool.query('INSERT INTO clientes SET ?', [clienteData]);
    return { id: result.insertId, ...clienteData };
  } catch (error) {
    throw error;
  }
};

// Actualizar un cliente por ID
export const updateCliente = async (id, clienteData) => {
  try {
    const [result] = await pool.query('UPDATE clientes SET ? WHERE id = ?', [clienteData, id]);
    if (result.affectedRows === 1) {
      return { id, ...clienteData };
    } else {
      return null; // Cliente no encontrado
    }
  } catch (error) {
    throw error;
  }
};

// Eliminar un cliente por ID
export const deleteCliente = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
    if (result.affectedRows === 1) {
      return { id };
    } else {
      return null; // Cliente no encontrado
    }
  } catch (error) {
    throw error;
  }
};
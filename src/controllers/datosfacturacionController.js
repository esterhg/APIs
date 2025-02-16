const sequelize = require("../libs/sequelize");
const datosfacturacionServices = require("../services/datosfacturacion.services");
const service = new datosfacturacionServices();
 

const create = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const {RTN} = req.body;
    if (!RTN) {
      throw new Error("El campo 'rtn' es obligatorio.");
    }

    const existingRecords = await service.findRTN(RTN);

      if (existingRecords.length > 0) {
        return res.status(409).json({
          success: false,
          message: `El RTN ${RTN} ya está registrado en el sistema.`,
        });
      }

    // Crear el registro si no existe
    const response = await service.create(req.body, transaction);
    await transaction.commit();
    return res.json({ success: true, data: response });

  } catch (error) {
    // Revertir la transacción en caso de error
    await transaction.rollback();
    return res.status(500).json({ success: false, message: error.message });
  }
};


const get = async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const update = async (req, res) => {
    try {
      const { id } = req.params;
      const body=req.body;
      const response = await service.update(id,body);
      res.json(response);
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
};
const _delete = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await service.delete(id);
      res.json(response);
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
module.exports ={
    create,get,getById,update,_delete
};

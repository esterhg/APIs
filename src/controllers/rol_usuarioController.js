const rol_usuarioServices = require("../services/rol_usuario.services");
const service = new rol_usuarioServices();
 
const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    res.json({ success: true, data: response }); 
  } catch(error){
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res, next) => {
  try {
    const response = await service.find();
    
    if (!response || response.length === 0) {
      return res.status(404).json({ success: false, message: "No data found" });
    }

    res.json({ success: true, data: response });
  } catch (error) {
    next(error); 
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json({ success: true, data: response });
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

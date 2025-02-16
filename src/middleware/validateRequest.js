//Validar la solicitud de cada esquema 

const validateRequest =(schema, property = "body")=>{
    return(req,res,next)=>{
        const data = req[property]; // Puede ser req.body, req.params o req.query
        const { error } = schema.validate(data, { abortEarly: false, stripUnknown: true });
      if(error){
            return res.status(400).json({
                success:false,
                menssage:"Error de validación",
                error:error.details.map((err)=>({
                    field:err.path.join("."),
                    message: err.message,
                })),
            });
        }
        next(); // Si pasa la validación, continúa al siguiente controlador

    };
};

module.exports = { validateRequest };
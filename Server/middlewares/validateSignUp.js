import joi from 'joi';
const validateCreate = (req, res, next) => {
      const schema = joi.object({
          
          first_name: joi.string().trim().min(3).max(100).required(),
          second_name: joi.string().trim().min(3).max(100).required(),
          email: joi.string().trim().min(3).max(100).required(),
          userName: joi.string().trim().min(3).max(100).required(),
          password: joi.string().required()
          });
          const result =  joi.validate(req.body, schema);
          if (result.error){
          res.status(400).send(result.error);
          return; 
          }
      return next();
  };

export default validateCreate;


import joi from 'joi';


   const validateBody = (schema) =>{
        const validate = {
            title: joi.string().trim().min(3).required(),
            entry: joi.string().trim().required(),
        };

        return joi.validate(schema, validate);
    }
   export default validateBody;
     
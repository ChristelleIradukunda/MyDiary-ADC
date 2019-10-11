  import joi from 'joi';
  const validateEntry = (req, res, next) => {
    
        const schema ={
            
            title: joi.string().trim().min(3).max(100).required(),
            description: joi.string().required()
            };
            const result =  joi.validate(req.body, schema);
            if (result.error){
            res.status(400).send(result.error);
            return; 
            }
        
        
        return next();
    }
export {
    validateEntry
}

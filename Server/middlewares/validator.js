  import joi from 'joi';
  const validateEntry = (req, res, next) => {
    //    let {title = ''} = req.body;
    //      title = title.trim();

        // title = joi.string().trim().min(3).required(),
        // entry = joi.string().required()
        const schema ={
            title: joi.string().trim().min(3).max(100).required(),
            entry: joi.string().required()
            };
            const result =  joi.validate(req.body, schema);
            if (result.error){
            res.status(400).send(result.error);
            return;
            }
        
        // if(!title) return res.status(400).send({ message: "Title is required"})
        return next();
    }
export {
    validateEntry
}

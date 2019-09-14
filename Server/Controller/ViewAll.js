import notes from '../Models/db';

const take = (req, res)=>{
    res.status(200).json({
        status:200,
        data: notes,
    })
};
export default take;




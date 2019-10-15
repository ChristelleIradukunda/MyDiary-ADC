import express from 'express';
import {PostEntry, GetAll, GetOne, Delete, Update} from '../Controller/PostEntry';
import { validateEntry } from '../middlewares/validator'
 

const router = express.Router();

router.get ('/api/v1/entries',GetAll);
router.get ('/api/v1/entries/:id',GetOne);
router.delete ('/api/v1/entries/:id',Delete);
router.post ('/api/v1/entries', validateEntry, PostEntry);
router.put ('/api/v1/entries/:id', Update);

export default router;  


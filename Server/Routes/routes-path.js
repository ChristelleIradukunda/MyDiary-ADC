import express from 'express';
import {PostEntry, GetAll, GetOne} from '../Controller/PostEntry';
import updatee from '../Controller/Updates';
import Delete from '../Controller/Delete';
import { validateEntry } from '../middlewares/validator'
 

const router = express.Router();

router.get ('/api/v1/entries',GetAll);
router.get ('/api/v1/entries/:id',GetOne);
router.post ('/api/v1/entries', validateEntry, PostEntry);
router.put ('/api/v1/entries/:id',validateEntry, GetOne);
router.delete ('/api/v1/entries/:id',Delete);
export default router;  


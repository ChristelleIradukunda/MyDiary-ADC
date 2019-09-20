import express from 'express';
import ViewAll from '../Controller/ViewAll';
import GetOne from '../Controller/GetOne';
import PostEntry from '../Controller/PostEntry';
import updatee from '../Controller/Updates';

const router = express.Router();

router.get ('/api/v1/entries',ViewAll);
router.get ('/api/v1/entries/:id',GetOne);
router.post ('/api/v1/entries',PostEntry);
router.put ('/api/v1/entries/:id',updatee);
export default router; 

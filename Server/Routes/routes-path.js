import express from 'express';
import ViewAll from '../Controller/ViewAll';

const router = express.Router();
router.get ('/api/v1/entries',ViewAll);
export default router;

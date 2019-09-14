import express from 'express';

import ViewAll from '../Controller/ViewAll';
import GetOne from '../Controller/GetOne';

const router = express.Router();

router.get ('/api/v1/entries',ViewAll);
router.get ('/api/v1/entries/:id',GetOne);

export default router;

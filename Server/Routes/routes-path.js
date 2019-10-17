import express from 'express';
import {PostEntry, GetAll, GetOne, Delete, Update} from '../Controller/PostEntry';
import { validateEntry } from '../middlewares/validator';
import validateCreate from '../middlewares/validateSignUp';
import validateLogin from '../middlewares/validateSignIn';
import { signUpUser,UserSignIn } from '../Controller/UserController';

const router = express.Router();

router.get ('/api/v1/entries',GetAll);
router.get ('/api/v1/entries/:id',GetOne);
router.delete ('/api/v1/entries/:id',Delete);
router.post ('/api/v1/entries', validateEntry, PostEntry);
router.put ('/api/v1/entries/:id', Update);
router.post('/api/v1/auth/signup', validateCreate, signUpUser);
router.post('/api/v1/auth/signin', validateLogin, UserSignIn);


export default router;  


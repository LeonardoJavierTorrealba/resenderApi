import express from 'express'
import apiRoutes from './apiRoutes/apiRoutes.js'
const router = express.Router(); 


router.use('/api', apiRoutes);


export default router;

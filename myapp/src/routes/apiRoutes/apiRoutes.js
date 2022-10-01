import express from 'express'
import resendApiController from '../../controllers/api/resendApiController.js';
const router = express.Router(); 

router.get('/getProcessBySub', resendApiController.getProcessBySub);
router.get('/getProcessFromProd01', resendApiController.getProcessFromProd01);
router.post('/resendToMega', resendApiController.resendToMega);

export default router;
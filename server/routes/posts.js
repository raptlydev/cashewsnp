import express from 'express';
import { getCashewSnpData, getPositionData, download } from '../controllers/cashewSnp.js';

const router = express.Router();

router.post('/getCashewSnpData', getCashewSnpData); //view
router.get('/getPositionData', getPositionData); //view
router.post('/download', download); //view

export default router;
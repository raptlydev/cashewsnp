import express from 'express';
import { getPosts, createPost, updatePost, deletePost, getTest } from '../controllers/posts.js';
import { getGenomicInSilico, getScaffolds, downloadGenomicInSilico } from '../controllers/genomicInSilico.js';
import { getGenicInSilico, getTranscripts, downloadGenicInSilico } from '../controllers/genicInSilico.js';
import { getGenicExp, downloadGenicExp } from '../controllers/genicExp.js';
import { getGenomicExp, downloadGenomicExp } from '../controllers/genomicExp.js';

const router = express.Router();

// router.get('/', getPosts); //view
//Genomic
router.post('/getGenomicInSilico', getGenomicInSilico); //view
router.get('/getScaffolds', getScaffolds); //view
router.post('/getGenomicExp', getGenomicExp); //view
router.post('/downloadGenomicExp', downloadGenomicExp); //view
router.post('/downloadGenomicInSilico', downloadGenomicInSilico); //view

//Genic
router.post('/getGenicInSilico', getGenicInSilico); //view
router.get('/getTranscripts', getTranscripts); //view
router.post('/downloadGenicExp', downloadGenicExp); //view
router.post('/downloadGenicInSilico', downloadGenicInSilico); //view

router.post('/getGenicExp', getGenicExp); //view

export default router;
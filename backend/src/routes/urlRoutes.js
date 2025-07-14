import express from 'express';
import { createShortUrl, redirectUrl } from '../controllers/urlController.js';

const router = express.Router();

// POST /shorten - create a new short URL
router.post('/shorten', createShortUrl);

// GET /:shortId - redirect to original URL
router.get('/:shortId', redirectUrl);

export default router;

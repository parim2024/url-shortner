import Url from '../models/Url.js';
import shortid from 'shortid';

export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = shortid.generate();

  const newUrl = await Url.create({ originalUrl, shortId });
  res.json({ shortUrl: `http://localhost:8000/${shortId}` });
};

export const redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (!url) return res.status(404).send('Not found');
  
  url.clicks++;
  await url.save();
  res.redirect(url.originalUrl);
};

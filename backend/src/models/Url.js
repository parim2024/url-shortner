import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Url', urlSchema);

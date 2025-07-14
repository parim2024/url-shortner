import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = ({ setShortUrl }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const res = await axios.post('http://localhost:8000/shorten', {
        originalUrl,
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      setError('Failed to shorten the URL. Try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
      <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
        Enter URL:
      </label>
      <input
        type="url"
        id="url"
        required
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Shorten
      </button>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </form>
  );
};

export default UrlForm;

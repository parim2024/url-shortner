import React, { useState } from 'react';
import UrlForm from './components/UrlForm';

const App = () => {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">URL Shortener</h1>
      <UrlForm setShortUrl={setShortUrl} />
      {shortUrl && (
        <div className="mt-4 p-4 bg-white rounded shadow-md text-center">
          <p className="text-lg font-semibold text-gray-700">Short URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default App;

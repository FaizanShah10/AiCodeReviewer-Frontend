import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/ai/get-response', { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-zinc-900 flex'>
      
      {/* Left Side: Code Input Section */}
      <div className="w-1/2 h-full flex flex-col gap-6 justify-center items-center p-4" id="code">
        <h2 className='text-white font-[helvetica]'>
          Hello, I am here to help you with your query! 🚀
        </h2>
        <div className="w-[90%] min-h-[10vh] max-h-[50vh] bg-zinc-800 rounded-2xl shadow-lg p-3 flex flex-col relative overflow-y-auto">
          <textarea 
            placeholder="Message CodeGenie"
            className="w-full bg-transparent text-md outline-none text-gray-800 text-white resize-none overflow-auto font-[helvetica]"
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto"; 
              e.target.style.height = e.target.scrollHeight + "px";

              const parentDiv = e.target.closest('div');
              if (parentDiv.scrollHeight > parentDiv.clientHeight) {
                parentDiv.style.overflowY = "auto";
              }
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={() => {
              reviewCode();
              setCode('');
            }}
            className="absolute font-[helvetica] bottom-2 right-3 bg-white text-black px-3 py-2 rounded-full overflow-hidden shadow-lg"
          >
            Review Code
          </button>
        </div>
      </div>

      {/* Right Side: Review Output Section */}
      <div className="w-1/2 h-full p-10 flex justify-center items-center">
        <div className="w-full h-full bg-zinc-800 rounded-2xl p-6 shadow-lg overflow-auto max-h-[100vh]">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Markdown className="text-white font-[helvetica]">{review}</Markdown>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default App;

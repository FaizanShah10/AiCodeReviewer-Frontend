import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';


const App = () => {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('https://genie-codereviewer.vercel.app/ai/get-response', { code }, {
        withCredentials: true,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 flex flex-col">
      
      <Navbar/>

      {/* ✅ Main Content */}
      <div className="flex lg:flex-row md:flex-row flex-col flex-grow">
        {/* Left Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full h-full flex flex-col gap-6 justify-center items-center lg:p-4 p-0" id="code">
          <div className="text-white font-[helvetica] text-center px-4 lg:text-xl text-md">
            Hello, I am here to help you with your code! 🚀
          </div>
          <div className="w-[90%] min-h-[10vh] lg:max-h-[50vh] md:max-h-[50vh] max-h-[30vh] bg-zinc-800 rounded-2xl shadow-lg p-3 flex flex-col relative overflow-y-auto">
            <textarea
              placeholder="Message CodeGenie"
              className="w-full bg-transparent text-md outline-none  text-white resize-none overflow-auto font-[helvetica]"
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
              className="absolute font-[helvetica] bottom-2 right-3 bg-white text-black lg:px-4 lg:py-2 px-3 py-1 rounded-pill shadow-lg flex items-center justify-center"
            >
              Review
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full h-full lg:p-6 p-2 flex justify-center items-center">
          <div className="w-full h-full bg-zinc-800 rounded-2xl p-6 shadow-lg overflow-auto lg:max-h-[100vh] md:max-h-[100vh] max-h-[45vh]">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Markdown className="text-white font-[helvetica]">{review}</Markdown>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

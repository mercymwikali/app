import React, { useEffect, useState } from 'react';
import './App.css';
import Select from './components/Select';

function App() {
  const [word, setWord] = useState('');
  const [all, setAll] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setAll(dataJ);
    setMain(dataJ[0]);
    const url = dataJ[0].phonetics[0].audio;
    const urla = url.replace("//ssl.", "https://");
    setAudio(urla);
  };
  
  useEffect(() => {
   
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center fw-bold fs-1 p-3 bg-success text-white'>
            Pocket Dictionary
          </div>
          <div className='form-floating bg-success py-3 pb-5 d-flex justify-content-center'>
            <input
              type='text'
              className='form=control-sm border-0 p-2 rounded col-md-3 col-sm-4'
              placeholder='Type your Word...'
              id='floatingInput'
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              className='btn btn-secondary text-light sol-md-1 col-sm-2 mx-2'
              onClick={Search}
            >
              Search
            </button>
          </div>
          {word === '' ? (
            <Select all={all} main={main} audio={audio} />
          ) : (
            <div className='fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra'>
              type a word in the box
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

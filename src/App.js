import { useState } from 'react';
import './App.css';
import FirstParagraph from './FirstParagraph';



function App() {

  const [showOne, setShowOne] = useState(false)
const [showTwo, setShowTwo] = useState(false)
const [showThree, setShowThree] = useState(false)

const delayShow = () => {
  console.log('running')
  setTimeout( () => {setShowOne(true)}, 2000);
  setTimeout( () => setShowTwo(true), 4000);
  setTimeout( () => setShowThree(true), 6000);
}

delayShow();
    return (
        <div className="App">
            <div className="wrapper">
                <p>Wake up, Neo...</p>
                { showOne ? <FirstParagraph /> : null}
                    {showTwo ? <p> Follow the white rabbit.</p> : null}

                {showThree? <p className="knockknock">Knock, Knock, Neo.</p> : null}
            </div>
        </div>
    );
}

export default App;

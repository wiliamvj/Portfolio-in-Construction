import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import './global.css';
import '../src/assets/animation.css';
import '../src/assets/animationTwo.css';
import '../src/assets/animationThree.css';

function App() {
  return (
    <div className="container">
        <h1>
            I'm coding, wait<span className="bounceOut1">.</span><span className="bounceOut2">.</span><span className="bounceOut3">.</span>
        </h1>

        <div className="social">
            <a href="https://github.com/wiliamvj" target="_blank" rel="noopener noreferrer">
                <FiGithub className="icon" size={56} color="rgb(98, 114, 164)" />
            </a>

            <a href="https://br.linkedin.com/in/wiliam-joaquim-6a3068113" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="icon" size={56} color="rgb(98, 114, 164)" />
            </a>
        </div>
    </div>
  );
}

export default App;

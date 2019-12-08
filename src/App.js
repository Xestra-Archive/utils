/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Download from '@axetroy/react-download';

const password = (len) => {
  let chars = ['!', '#', "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  for (let i = chars.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
  }
  chars.length = len;
  let password = chars.join('');
  return password
}

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <br />
        <h2>Utils.Xestra.us</h2>
        <br />
        <h3>Random Passwords</h3>
        <p>A simple password generator that creates 3 different password with 3 different lengths.</p>
        <code>{password(8)}</code>
        <code>{password(16)}</code>
        <code>{password(24)}</code><br />
        <br />
        <h3>Pastebin</h3>
        <p>This is a basic pastebin made by hastebin but edited and hosted by Xestra.</p>
        <a className="btn" href="https://paste.xestra.us" target="_blank">paste.xestra.us</a><br />
        <br />
        <h3>Useful Downloads</h3>
        <p>A collection of useful downloads that anyone can use.</p>
        <div className="deck">
          <div className="card">
            <h4>Center Taskbar</h4>
            <p>This executable is used to center the task bar on Windows 10.</p>
            <div className="bottom">
              <a className="btn left" href="https://github.com/mdhiggins/CenterTaskbar/blob/master/CenterTaskbar.exe?raw=true" download>Download</a><br />
              <a className="link" href="https://github.com/mdhiggins/CenterTaskbar">Creator</a>
            </div>
          </div>
          <div className="card">
            <h4>Reserved</h4>
            <p>This card is reserved for future projects. Come back later to see if something new is here!</p>
            <div className="bottom">
              <a className="btn left">Download</a><br />
              <a className="link" href="">Creator</a>
            </div>
          </div>
          <div className="card">
            <h4>Reserved</h4>
            <p>This card is reserved for future projects. Come back later to see if something new is here!</p>
            <div className="bottom">
              <a className="btn left">Download</a><br />
              <a className="link" href="">Creator</a>
            </div>
          </div>
          <div className="card">
            <h4>Reserved</h4>
            <p>This card is reserved for future projects. Come back later to see if something new is here!</p>
            <div className="bottom">
              <a className="btn left">Download</a><br />
              <a className="link" href="">Creator</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import WordCounter from './components/WordCounter';
 // Import the WordCounter component.

function App() {
  return (
    <div>
      <center>
      <h1>Responsive Paragraph Word Counter</h1>
      <WordCounter /> {/* Render the WordCounter component. */}
      </center>
    </div>
  );
}

export default App;

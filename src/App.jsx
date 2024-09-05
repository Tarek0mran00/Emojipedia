import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Card from './assets/Card';
import { emojipedia } from './assets/emojipedia';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiEntry) => (
          <Card
            key={emojiEntry.id} // Use a unique key prop for each Card
            emoji={emojiEntry.emoji}
            name={emojiEntry.name}
            meaning={emojiEntry.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
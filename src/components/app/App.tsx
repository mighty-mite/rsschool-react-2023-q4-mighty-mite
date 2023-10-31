import { useState } from 'react';
import Searchbar from '../searchbar/Searchbar';
import CardList from '../cardlist/CardList';

function App() {
  const [text, setText] = useState('');

  const onType = (query: string) => {
    setText(query);
  };

  return (
    <div className="app">
      <Searchbar onType={onType} />
      <CardList onSearch={text} />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from '../searchbar/Searchbar';
import CardList from '../cardlist/CardList';
import Layout from '../layout/Layout';
import Details from '../details/Details';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(localStorage.getItem('search') || '');
  }, []);

  const onType = (query: string) => {
    setText(query);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout onType={onType} onSearch={text} />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import CardList from '../cardlist/CardList';
import Searchbar from '../searchbar/Searchbar';

interface IProps {
  onType: (query: string) => void;
  onSearch: string;
}

function Layout(props: IProps) {
  const { onType, onSearch } = props;
  return (
    <main className="container" style={{ display: 'flex' }}>
      <section>
        <Searchbar onType={onType} />
        <CardList onSearch={onSearch} />
      </section>
      <Outlet />
    </main>
  );
}

export default Layout;

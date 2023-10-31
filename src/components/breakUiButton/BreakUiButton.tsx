import { useState, useEffect, useReducer } from 'react';
import './breakUiButton.scss';

// interface State {
//   error: boolean;
// }

function BreakUiButton() {
  // constructor(props: object) {
  //   super(props);
  //   this.state = { error: false };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const [error, setError] = useState(false);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // componentDidUpdate(prevProps: object, prevState: State): void {
  //   const { error } = this.state;
  //   if (error !== prevState.error) throw new Error('hey');
  // }

  // useEffect(() => {
  //   throw new Error('useEffect error');
  // }, []);

  const handleClick = () => {
    try {
      setError(true);
      throw new Error('handle error');
    } catch (e) {
      console.error(e);
      forceUpdate();
    }
  };

  return (
    <button className="break" type="button" onClick={handleClick}>
      Break it
    </button>
  );
}

export default BreakUiButton;

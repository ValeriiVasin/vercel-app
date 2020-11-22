import axios from 'axios';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(0);

  useEffect(() => {
    axios
      .get<{ checkIns: number }>('/api/online')
      .then(({ data: { checkIns } }) => {
        setOnline(checkIns);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Current online: {online}</h1>;
}

render(<App />, document.getElementById('app'));

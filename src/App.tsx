import type {FC} from 'react';
import {useRoutes} from 'react-router-dom';
import {routes} from './routes';

const App: FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
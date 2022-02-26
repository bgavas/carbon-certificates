import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

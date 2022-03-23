import { AppState } from './context/AppState';
import { MainPage } from './pages/MainPage';

import './styles/index.css'

function App() {
  return (
    <AppState>
      <MainPage />
    </AppState>
    
  );
}

export default App;

import './App.css';
import Main from './components/Main';
import Card from './components/Card';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
      <Main/>
      </GlobalProvider>
    </>
  );
}

export default App;

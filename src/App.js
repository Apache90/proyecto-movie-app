import Main from './components/Main';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <>
      <GlobalProvider>
      <Main/>
      </GlobalProvider>
      <Footer/>
    </>
  );
}

export default App;

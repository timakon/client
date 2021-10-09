import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

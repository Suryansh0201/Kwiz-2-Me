import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
function App() {
  return (
<BrowserRouter>
<div className='App'>
  <Header/>
  
  </div>
  <Footer/>
</BrowserRouter>
  );
}

export default App;

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <header className='d-flex bg-secondary w-100'>
      <Header/>
    </header>
    <main  className='d-flex flex-column flex-grow-1'>
      
    </main>
    <footer  className='d-flex flex-fill bg-warning'>
      <Footer/>
    </footer>
    </>
  )
}

export default App

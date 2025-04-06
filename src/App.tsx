import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {

  return (
    <>
    <header className='d-flex w-100'>
      <Header/>
    </header>
    <main  className='d-flex flex-column flex-grow-1 align-items-center overflow-auto'>
      <Content/>
    </main>
    <footer  className='d-flex bg-body-tertiary'>
      <Footer/>
    </footer>
    </>
  )
}

export default App

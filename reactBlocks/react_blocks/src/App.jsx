import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';


function App() {

  return (
    <>
      <div className='blocks'>
        <Header  />
        <Navigation  />
        <MainContent  />
      </div>
    </>
  )
}

export default App

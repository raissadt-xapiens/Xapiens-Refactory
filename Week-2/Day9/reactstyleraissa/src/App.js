import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
  return(
    <div style={{backgroundColor:'#171717'}}>
      <Header/>
      <Introduction/>
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
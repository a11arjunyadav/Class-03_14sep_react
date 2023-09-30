//
import './App.css';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Section from './Components/Section';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <Section />
      </main>
      <Footer />
    </>
  );
}

export default App;

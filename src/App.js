import './App.css';
import Carousel from './pages/carousel/Carousel';
import Card from './pages/carousel/card/Card';
import Services from './pages/carousel/service/Services';
import Topbar from './topBar/Topbar';

function App() {
  return (
   <>
   <Topbar/>
   <Carousel/>
   <Card/>
   <Services/>
   </>
  );
}

export default App;

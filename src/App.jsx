import Header from "./components/Header/Header";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer"
import "./App.css";
function App() {
  return (
    
    <div className="app">  
        <Header />
        <main>
          <Destinations/>
        </main>
        <Footer />
    </div>
   );
}

export default App;

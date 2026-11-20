import Header from "./components/Header/Header";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import "./App.css";
function App() {
  return (
    
    <div className="app">  
        <Header />
        <main>
        <Destinations/>
        <Login />
        </main>
        <Footer />
    </div>
   );
}

export default App;

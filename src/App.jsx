import AppRoutes from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";



const App = () => {
  return (
    <div  className='containerOne'>

      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;

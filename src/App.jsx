import AppRoutes from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

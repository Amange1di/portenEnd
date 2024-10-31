import AppRoutes from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (

    <div  className='containerOne'>
 <ToastContainer position="top-right" autoClose={1000} />
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
/* import Inicio from "./pages/Inicio";
 */ import Footer from "./components/Footer";
import Portafolio from "./pages/Portafolio";
import IconWhatsapp from "./components/Whatsapp";
import Contactame from "./pages/Contactame";
import Servicios from "./pages/Servicios";
import BlogDetalle from "./pages/BlogDetalle";
import Pdf from "./components/About/Pdf";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Error404 from "./components/404";

const Blog = lazy(() => import("./pages/Blog"));
const Inicio = lazy(() => import("./pages/Inicio"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contactame" element={<Contactame />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/blog/:id" element={<BlogDetalle />}></Route>
          <Route path="/pages/pdf" element={<Pdf />}></Route>

          <Route path="*" element={<Error404 />}></Route>
        </Routes>

        <IconWhatsapp />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

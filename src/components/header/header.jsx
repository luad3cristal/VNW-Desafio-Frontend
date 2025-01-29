import S from "./header.module.scss";
import logo from "../../assets/logo.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.logo_container}>
          <img src={logo} alt="imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <div className={S.wrap_container}>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/doados">Livros Doados</Link>
              </li>
              <li>
                <Link to="/queroDoar">Quero Doar</Link>
              </li>
            </ul>
          </nav>
          <section className={S.input_container}>
            <input type="text" placeholder="O que você procura?" />
          </section>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}

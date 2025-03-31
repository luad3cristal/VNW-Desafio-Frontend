import S from "./Doados.module.scss";
import livroExemplo from "../../assets/livro-exemplo.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get("https://vnw-backend.onrender.com/livros");
    setLivros(response.data);
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <main>
      <article className={S.livros_doados}>
        <h2>Livros Doados</h2>
        <section className={S.cards}>
          <div className={S.card}>
            <div className={S.card_image}>
              <img src={livroExemplo} alt="capa do livro Protagonista" />
            </div>
            <div className={S.card_content}>
              <p>O protagonista</p>
              <p>Susanne Andrade</p>
              <p>Ficção</p>
            </div>
          </div>
          {livros.map((livro, index) => (
            <div key={index} className={S.card}>
              <div className={S.card_image}>
                <img
                  src={livro.imagem_url}
                  alt={`capa do livro ${livro.titulo}`}
                />
              </div>
              <div className={S.card_content}>
                <p>{livro.titulo}</p>
                <p>{livro.autor}</p>
                <p>{livro.categoria}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}

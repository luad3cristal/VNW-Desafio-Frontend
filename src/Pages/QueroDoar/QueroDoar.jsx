import S from "./QueroDoar.module.scss";
import livroInfo from "../../assets/livro-info.png";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const sendData = async () => {
    const urlAPI = "https://vnw-backend.onrender.com/doar";

    const dataSend = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    const sendAPI = await axios.post(urlAPI, dataSend);

    alert("Livro enviado!");
    
    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem_url("");
  };

  const getTitle = (e) => setTitulo(e.target.value);
  const getCathegory = (e) => setCategoria(e.target.value);
  const getAuthor = (e) => setAutor(e.target.value);
  const getImage = (e) => setImagem_url(e.target.value);

  return (
    <main>
      <section className={S.doacoesBox}>
        <div className={S.aviso}>
          <p>
            Por favor, preencha o formulário com suas informações e as
            informações do Livro
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={S.titulo}>
            <img src={livroInfo} alt="" />
            <h2>Informações do Livro</h2>
          </div>

          <div className={S.inputBox}>
            <input
              type="text"
              placeholder="Título"
              onChange={getTitle}
              value={titulo}
            />
            <input
              type="text"
              placeholder="Categoria"
              onChange={getCathegory}
              value={categoria}
            />
            <input
              type="text"
              placeholder="Autor"
              onChange={getAuthor}
              value={autor}
            />
            <input
              type="url"
              placeholder="Link da Imagem"
              onChange={getImage}
              value={imagem_url}
            />

            <input type="submit" placeholder="Doar" onClick={sendData} />
          </div>
        </form>
      </section>
    </main>
  );
}

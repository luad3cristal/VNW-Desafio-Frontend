import S from "./Doados.module.scss";
import livroExemplo from "../../assets/livro-exemplo.png";

export default function Doados() {
  return (
    <main>
      <section className={S.doadosBox}>
        <h2>Livros Doados</h2>
        <section className={S.cards}>
          <div className={S.card}>
            <div>
              <img src={livroExemplo} alt="capa do livro Protagonista" />
            </div>
            <div>
              <p className={S.titulo}>O protagonista</p>
              <p className={S.autor}>Susanne Andrade</p>
              <p className={S.estilo}>Ficção</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

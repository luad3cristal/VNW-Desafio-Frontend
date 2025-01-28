import S from "./Doados.module.scss";
import livroExemplo from "../../assets/livro-exemplo.png";

export default function Doados() {
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
        </section>
      </article>
    </main>
  );
}

import S from "./QueroDoar.module.scss";
import livroInfo from "../../assets/livro-info.png";

export default function QueroDoar() {
  return (
    <main>
      <section className={S.doacoesBox}>
        <div className={S.aviso}>
          <p>
            Por favor, preencha o formulário com suas informações e as
            informações do Livro
          </p>
        </div>
        <form>
          <div className={S.titulo}>
            <img src={livroInfo} alt="" />
            <h2>Informações do Livro</h2>
          </div>

          <div className={S.inputBox}>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Categoria" />
            <input type="text" placeholder="Autor" />
            <input type="url" placeholder="Link da Imagem" />

            <input type="submit" placeholder="Doar" />
          </div>
        </form>
      </section>
    </main>
  );
}

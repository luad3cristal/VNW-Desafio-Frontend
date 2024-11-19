import S from "./Inicio.module.scss";
import grupo from "../../assets/grupo.png";
import leitura from "../../assets/leitura.png";
import conhecimento from "../../assets/conhecimento.png";
import balanca from "../../assets/balanca.png";

export default function Inicio() {
  return (
    <main>
      <section className={S.announcement}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.content}>
        <h2>Por que devo doar?</h2>

        <section className={S.cards}>
          <div className={S.card}>
            <img src={grupo} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </div>
          <div className={S.card}>
            <img src={leitura} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={S.card}>
            <img src={conhecimento} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>
          <div className={S.card}>
            <img src={balanca} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

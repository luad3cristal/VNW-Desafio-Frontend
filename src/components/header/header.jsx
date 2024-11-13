import S from "./header.module.scss";
// importar a logo do assets

export default function Header() {
  return (
    <header>
      <section>{/* logo */}</section>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Livros Doados</li>
          <li>Quero doar</li>
        </ul>
      </nav>

      <input type="text" placeholder="O que você procura?" />
    </header>
  );
}

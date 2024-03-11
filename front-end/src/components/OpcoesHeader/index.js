import './style.css';

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function OpcoesHeader() {
  return (
    <ul className='opcoes'>
      {
        textOptions.map((text) => (
          <li className='opcao'><p>{text}</p></li>
        ))
      }
    </ul>
  );
}
import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-size: 16px;
`


const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function OpcoesHeader() {
  return (
    <Opcoes>
      {
        textOptions.map((text) => (
          <Opcao><p>{text}</p></Opcao>
        ))
      }
    </Opcoes>
  );
}
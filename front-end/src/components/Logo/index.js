import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImagem = styled.img`
    gap: 20px;
    padding-left: 20px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt='Logo alura' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
        );
}
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import './style.css';

export default function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    );
}
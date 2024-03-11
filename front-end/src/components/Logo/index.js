import logo from '../../img/logo.svg'
import './style.css'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo alura'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
        );
}
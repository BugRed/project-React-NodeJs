import './style.css';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';


const icons = [sacola, perfil];


export default function IconesHeader() {
    return (
        <ul className='icones'>
            {
                icons.map((icon) => (
                    <li><img src={icon} alt='' className='icone'></img></li>
                ))
            }
        </ul>
    );
}
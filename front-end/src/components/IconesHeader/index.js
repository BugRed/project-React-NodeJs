import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [sacola, perfil];


export default function IconesHeader() {
    return (
        <Icones>
            {
                icons.map((icon) => (
                    <Icone><img src={icon} alt=''></img></Icone>
                ))
            }
        </Icones>
    );
}
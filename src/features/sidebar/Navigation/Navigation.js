import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Modal from '../../../Modal/Modal';
 
const NavList = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 15px 0 0;
    display: flex;  
    flex-direction: column;
`;

const LinkItem = Styled(NavLink)` 
    color: #666;
    margin: 6px 0;
    text-decoration: none;
    &.active {
    font-weight: bold;
  }
`;

const ListItem = Styled.li`
    color: #666;
    margin: 6px 0;
    text-decoration: none;
    cursor: pointer;
`;

const Divider = Styled.li`
    background: linear-gradient(to right, #dcdcdc, rgba(206, 41, 41, 0));
    height: 1px;
    margin: 20px 0;
    list-style: none;
`;

export const Navigation = () => {
    const [showModal, setShowModal] = useState(false);
    const allOptions = ['Reddit', 'Hacker News'];
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleOptions = (e, options) => {
        if (options.includes(e.target.value)) {
            const newOptions = options.filter(item => item !== e.target.value);
            newOptions.sort((a, b) => a - b);
            setSelectedOptions(newOptions);
        } else {
            const newOptions = options.slice();
            newOptions.push(e.target.value);
            newOptions.sort((a, b) => a - b);
            setSelectedOptions(newOptions);
        }
    }

    useEffect(() => {
        setSelectedOptions(allOptions);
    }, []);
    

    console.log(selectedOptions);

    return (
        <nav>
            
            <NavList>
                <LinkItem to='/all-in-one'>All In One</LinkItem>
                <Divider/>
                {selectedOptions.map((item, i) => {
                    const url= item.split(' ').join('-').toLowerCase();
                    const key=`${item}${i}`;
                    return <LinkItem key={key} to={`/${url}`}>{item}</LinkItem>
                })}
                <Divider/>
                <ListItem onClick={() => {setShowModal(true)}}>
                    Settings
                </ListItem>
            </NavList>
            <Modal show={showModal} onClose={() => setShowModal(false)} title='Settings' allOptions={allOptions} selectedOptions={selectedOptions} handleOptions={handleOptions}>       
            </Modal>
        </nav>
    );
}

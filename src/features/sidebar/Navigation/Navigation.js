import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOption, setOptions, selectAllOptions, selectSelectedOptions } from './navigationSlice.js';
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

    const dispatch = useDispatch();
    const allOptions = useSelector(selectAllOptions);
    const selectedOptions = useSelector(selectSelectedOptions);
    
    
    useEffect(() => {
        dispatch(setOptions(allOptions));
    }, [dispatch]);
    

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
            <Modal show={showModal} onClose={() => setShowModal(false)} title='Settings'>       
            </Modal>
        </nav>
    );
}

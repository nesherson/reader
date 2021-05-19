import { useState } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { selectSelectedOptions } from './Settings/settingsSlice.js';

import Modal from '../../../UI/Modal/Modal';
import { Settings } from './Settings/Settings';

const NavList = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 15px 0 0;
    display: flex;  
    flex-direction: column;
`;

const LinkItem = Styled(NavLink)` 
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    &.active {
      font-weight: bold;
    };
`;

const ListItem = Styled.li`
    color: ${(props) => props.theme.primary};
    margin: 6px 0;
    cursor: pointer;
`;

const Divider = Styled.li`
    background: linear-gradient(to right, ${(props) =>
      props.theme.primary}, rgba(206, 41, 41, 0));
    height: 1px;
    margin: 20px 0 20px 0;
    list-style: none;
`;

export const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const selectedOptions = useSelector(selectSelectedOptions).map((item, i) => {
    const pathname = item.split(' ').join('-').toLowerCase();
    const key = `${item}${i}`;
    return (
      <ListItem key={key}>
        <LinkItem to={`/${pathname}`}>{item}</LinkItem>
      </ListItem>
    );
  });

  return (
    <nav>
      <NavList>
        <LinkItem exact to='/'>All In One</LinkItem>
        <Divider />
        {selectedOptions}
        {selectedOptions.length ? <Divider /> : null}
        <ListItem
          onClick={() => {
            setShowModal(true);
          }}
        >
          Settings
        </ListItem>
      </NavList>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title='Settings'
      >
        <Settings />
      </Modal>
    </nav>
  );
};

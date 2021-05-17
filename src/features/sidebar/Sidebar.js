import Styled from 'styled-components';
import { Navigation } from './Navigation/Navigation';
import { Logo } from '../../assets/icons/Logo';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

const Aside = Styled.aside`
    box-sizing: border-box;
    width: 25%;
    min-width: 220px;
    background-color: ${(props) => props.theme.background};
    padding: 35px 15px 20px 5%;
    position: fixed;
    height: 100%;
    transition: background-color 0.2s ease;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Sidebar = () => {
  return (
    <Aside>
      <ThemeToggle />
      <Logo width={48} color='#000' />
      <Navigation />
    </Aside>
  );
};

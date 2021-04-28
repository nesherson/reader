import Styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';


const StyledModal = Styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.5s ease-in-out;
    ${props => props.show ? css`
        opacity: 1;
        pointer-events: visible;
    ` : css`
        opacity: 0;
        pointer-events: none;
    `}
    }
`;

const ModalContent = Styled.div`
    width: 500px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    ${props => props.show ? css`
        transform: translateY(0);
    ` : css`
        transform: translateY(-500px);
    `}
    
`;

const ModalHeader = Styled.div`
    padding: 10px;
`;

const Header = Styled.h4``;

const ModalBody = Styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

const ModalFooter = Styled.div`
    padding: 10px;
`;

export const Modal = (props) => {
    return (
        <StyledModal show={props.show} onClick={props.onClose}>
            <ModalContent show={props.show} onClick={(e) => {e.stopPropagation();}}>
                <ModalHeader>
                    <Header>{props.title}</Header>
                </ModalHeader>
                <ModalBody>{props.children}</ModalBody>
                <ModalFooter>
                <button onClick={props.onClose}>Close</button>
                </ModalFooter>
            </ModalContent>        
        </StyledModal>
    );
}
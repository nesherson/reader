import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedOptions, selectAllOptions, toggleOption } from '../features/sidebar/Navigation/navigationSlice.js';
import Styled, { css } from 'styled-components';
import  ReactDOM from 'react-dom';
import { Close } from '../assets/icons/Close.js';


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
`;

const ModalContent = Styled.div`
    width: 500px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
    ${props => props.show ? css`
        transform: translateY(0);
    ` : css`
        transform: translateY(-500px);
    `}
`;

const ModalHeader = Styled.div`
    padding: 15px 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
`;

const Header = Styled.h4`
    font-size: 1.30rem;
    margin: 0;
    padding: 0;
`;

const ModalBody = Styled.div`
    padding: 10px 15px;
`;

const ModalFooter = Styled.div`
    padding: 10px;
`;

const Options = Styled.ul`
    margin: 0;
    padding-inline-start: 18px;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

const OptionItem = Styled.li`
    padding: 3px;
`;


const Text = Styled.p`
    margin: 8px 0;
    padding: 5px 5px;
`;

const Modal = (props) => {

    const dispatch = useDispatch();
    const allOptions = useSelector(selectAllOptions);
    const selectedOptions = useSelector(selectSelectedOptions);

    return ReactDOM.createPortal(
        <StyledModal show={props.show} onClick={props.onClose}>
            <ModalContent show={props.show}  onClick={(e) => {e.stopPropagation();}}>
                <ModalHeader>
                    <Header>{props.title}</Header>
                        <div onClick={props.onClose}>
                            <Close width={24} height={24}/>
                        </div>
                </ModalHeader>
                <ModalBody>
                <Text>Enabled news sources</Text>
                        <Options>
                            { allOptions.map((option, i) => {
                                const checkedValue = selectedOptions.includes(option) ? true : false;

                                return ( <OptionItem key={`${option}${i}`}>
                                            <label htmlFor={option}>
                                                <input id={option} type='checkbox' checked={checkedValue} value={option}
                                                onChange={(e) => dispatch(toggleOption(e.target.value))}/>
                                                <span>{option}</span>
                                            </label>
                                        </OptionItem>)
                                        })
                            }
                        </Options>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>        
        </StyledModal>
    , document.getElementById('root'));
};

export default Modal;
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAllOptions,
  selectSelectedOptions,
  toggleOption,
} from './settingsSlice.js';

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

export const Settings = () => {
  const dispatch = useDispatch();
  const allOptions = useSelector(selectAllOptions);
  const selectedOptions = useSelector(selectSelectedOptions);

  return (
    <>
      <Text>Enabled news sources</Text>
      <Options>
        {allOptions.map((option, i) => {
          const checkedValue = selectedOptions.includes(option) ? true : false;
          return (
            <OptionItem key={`${option}${i}`}>
              <label htmlFor={option}>
                <input
                  id={option}
                  type='checkbox'
                  checked={checkedValue}
                  value={option}
                  onChange={(e) => dispatch(toggleOption(e.target.value))}
                />
                <span>{option}</span>
              </label>
            </OptionItem>
          );
        })}
      </Options>
    </>
  );
};

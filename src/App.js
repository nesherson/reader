import  Styled  from 'styled-components';
import { Main } from './features/main/Main';
import { Sidebar } from './features/sidebar/Sidebar';

const Wrapper = Styled.div`
  display: flex;
  min-height: 100vh;
  border: 1px solid black;
`;

function App() {
  return (
    <Wrapper>
      <Sidebar/>
      <Main/>
    </Wrapper>
  );
}

export default App;

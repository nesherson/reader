import  Styled  from 'styled-components';
import { Main } from './features/main/Main';
import { Sidebar } from './features/sidebar/Sidebar';

// https://www.reddit.com/r/popular.json

const Wrapper = Styled.div`
  display: flex;
  min-height: 100vh;
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

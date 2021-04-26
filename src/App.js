import  Styled  from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './features/main/Main';
import { Sidebar } from './features/sidebar/Sidebar';

// https://www.reddit.com/r/popular.json

const Wrapper = Styled.div`
  display: flex;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar/>
        <Main/>
      </Wrapper>
    </Router>
  );
}

export default App;

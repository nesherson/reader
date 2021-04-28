import  Styled  from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './features/main/Main';
import { Sidebar } from './features/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <Main/>
      </div>
    </Router>
  );
}

export default App;

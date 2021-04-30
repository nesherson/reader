import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './features/main/Main';
import { Sidebar } from './features/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <>
        <Sidebar/>
        <Main/>
      </>
    </Router>
  );
}

export default App;

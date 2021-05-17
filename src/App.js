import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Main } from './features/Main/Main';
import { Sidebar } from './features/Sidebar/Sidebar';
import { selectTheme } from './features/Sidebar/ThemeToggle/themeToggleSlice.js';
import darkTheme from './styles/darkTheme.js';
import lightTheme from './styles/lightTheme.js';

function App() {
  const currentTheme = useSelector(selectTheme);
  const theme = currentTheme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <Router>
      <>
        <ThemeProvider theme={theme}>
          <Sidebar />
          <Main />
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;

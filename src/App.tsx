import './App.css'
import Header from './components/Header'
import Operations from './components/Operations'
import Saved from './components/Saved'
import Footer from './components/Footer'
import { toggleTheme, loadTheme } from './helpers/theme/themeUtils'
import { lightTheme, darkTheme, GlobalStyles } from './helpers/theme/themeConfig';

import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

function App() {
  const [theme, setTheme] = useState(loadTheme);

  const handleToogleTheme = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyles />
        <Content>
          <Header theme={theme} toggleTheme={handleToogleTheme} />

          <Operations />

          <Saved />

          <Footer />
        </Content>
      </Wrapper>
    </ThemeProvider>
  )
}

// Estilos
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  
`;

export default App
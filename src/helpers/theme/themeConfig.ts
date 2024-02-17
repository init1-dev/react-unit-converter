import { createGlobalStyle } from 'styled-components';

// Define la interfaz del tema
export interface Theme {
    body: string;
    text: string;
    html: string;
    header: string;
    headerH1: string;
    savedCardBg: string;
    operationsBg: string;
  }
  
  // Define los temas
  const light = '#ffffff';
  const dark = '#0D1117';
  
  export const lightTheme: Theme = {
    body: light,
    text: '#000000',
    html: light,
    header: light,
    headerH1: '#2E0039',
    savedCardBg: '#E3E3E3',
    operationsBg: '#2E0039',
  };
  
  export const darkTheme: Theme = {
    body: dark,
    text: light,
    html: dark,
    header: dark,
    headerH1: light,
    savedCardBg: '#141921',
    operationsBg: '#141921'
  };
  
  // Estilos globales
  export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    html {
      background-color: ${({ theme }) => theme.html};
    }
    header {
      background-color: ${({ theme }) => theme.header};
  
      h1 {
        ${({ theme }) => theme.headerH1};
      }
    }
  `;
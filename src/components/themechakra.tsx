// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Configuración del tema
const config: ThemeConfig = {
  
};

// Extiende el tema y agrega tus modificaciones
const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#FFFFFF', // 
        color: 'yourFontColor',
      },
    },
  },
  fonts: {
    // Agrega configuraciones de fuente según sea necesario
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    // ...
  },
  // Agrega otras modificaciones según sea necesario
});

export default theme;


import { useState, useEffect } from 'react';
  
// Hook
export default function useFontsLoaded() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(function () {
        setFontsLoaded(true)
    });

  }, []); // Empty array ensures that effect is only run on mount and unmount

  return fontsLoaded;
}
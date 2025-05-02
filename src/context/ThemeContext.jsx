// import { useState,createContext, useContext } from "react";
// const ThemeContext=createContext();

// const ThemeProvider=({children})=>{
//     const [theme,setTheme]=useState('ligth');
//     return(
//       <ThemeContext.Provider value={[theme,setTheme]}>
//         {children}
//       </ThemeContext.Provider>
//     )
// }

// //Custom Hook

// const useTheme=()=> useContext(ThemeContext);

// export {useTheme,ThemeProvider};
import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Retrieve the theme from localStorage or set to 'light' by default
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  // Whenever the theme changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
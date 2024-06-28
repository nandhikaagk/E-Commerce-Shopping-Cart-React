import React, { createContext, useContext } from "react";
import { ThemeContext } from "../Contexts/Theme";
function ThemeButton(){
    const{theme,toggleTheme}=useContext(ThemeContext)
   
    return(
        <>
        <button onClick={toggleTheme}>{theme}</button>
        
        </>
    )
}
export default ThemeButton
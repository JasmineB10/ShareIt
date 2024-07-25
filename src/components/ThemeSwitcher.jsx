import {useContext} from 'react'
import ThemeContext from './ThemeContext';
function ThemeSwitcher() {

    const {theme, setTheme, textColor, setTextColor} = useContext(ThemeContext);

    const switchTheme = () => {
        setTheme(theme === "bg-slate-300" ? "bg-slate-950" : "bg-slate-300");
        setTextColor(textColor === "text-black" ? "text-white" : "text-black");
    };
  return (
   <button onClick={switchTheme} className='border-4 border-indigo-400 px-4 py-2 rounded-full text-indigo-400 font-semibold'>
     Switch Theme
   </button>
  )
}

export default ThemeSwitcher;

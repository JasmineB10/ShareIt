import { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

function Appbar() {
  const {theme} = useContext(ThemeContext);
    return (
      <div className={`flex pt-2 w-full justify-between sticky top-0 ${theme}`}>
        <div className="p-4 text-xl font-bold text-indigo-400 tracking-wider ">
          <Link to="/" >Share It</Link>
        </div>
        
        <div className="flex m-1">
        <div className="mt-2 mr-4">
        <Button title="Sign Up" path="/signup"/>
        </div>
        <div className="p-2 mr-2">
        <ThemeSwitcher/>
        </div>
        </div>  
      </div>
    )
  }
  
  export default Appbar;
  
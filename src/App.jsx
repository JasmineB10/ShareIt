import { useContext } from "react";
import ThemeContext from "./components/ThemeContext";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import CreateBlog from "./screens/CreateBlog";
function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme} min-h-screen`}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'
// import Header from "./components/header";
// import Search from "./components/search";
// import Blog from "./components/blog";
import "./App.css";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/blog/:id' Component={Blog} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

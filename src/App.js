import TextControlsExample from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsfeed from "./components/Newsfeed";
import Market from "./pages/Market";
import "./App.css";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Gaming from "./pages/Gaming";
import Group from "./pages/Group";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/market" exact element={<Market />}></Route>
          <Route path="/group" exact element={<Group />}></Route>
          <Route path="/gaming" exact element={<Gaming />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

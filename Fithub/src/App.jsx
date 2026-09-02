import { Frontpage } from "./Pages/Frontpage/Frontpage";
import { Homepage } from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Searchbar } from "./Pages/Searchpage/Searchpage";
import { Calender } from "./Pages/Myschedulepage/Myschedulepage";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Frontpage />} />
        <Route path="/Home" index element={<Homepage />} />
        <Route path="/Search" index element={<Searchbar />} />
        <Route path="/Calender" index element={<Calender />} />
        <Route path="/Login" index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

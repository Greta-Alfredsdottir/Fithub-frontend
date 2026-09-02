import { Frontpage } from "./Pages/Frontpage/Frontpage";
import { Homepage } from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Searchbar } from "./Pages/Searchpage/Searchpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Frontpage />} />
        <Route path="/Home" index element={<Homepage />} />
        <Route path="/Search" index element={<Searchbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Frontpage } from "./Pages/Frontpage/Frontpage";
import { Homepage } from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Frontpage />} />
        <Route path="/Home" index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

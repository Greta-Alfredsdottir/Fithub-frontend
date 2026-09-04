import { Frontpage } from "./Pages/Frontpage/Frontpage";
import { Classdetails } from "./Pages/Classdetailspage/Classdetailspage";
import { Homepage } from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Searchbar } from "./Pages/Searchpage/Searchpage";
import { Calender } from "./Pages/Myschedulepage/Myschedulepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Frontpage />} />
        <Route path="/Home" index element={<Homepage />} />
        <Route path="/Search" index element={<Searchbar />} />
        <Route path="/Calender" index element={<Calender />} />
        <Route path="/Details" index element={<Classdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

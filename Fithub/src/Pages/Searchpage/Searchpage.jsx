// lave en side hvor du kan søge efter class

import { Navbar } from "../../Components/Navigation/Navbar";

export function Searchbar() {
  return (
    <>
      <Navbar />
      <li>
        <input type="search" placeholder="søg" />
        <button>Søg</button>
      </li>
    </>
  );
}

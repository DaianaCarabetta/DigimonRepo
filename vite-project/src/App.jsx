import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />} />;
        <Route path="/detail/:name" element={<Detail />} />;
      </Routes>
    </>
  );
}

export default App;

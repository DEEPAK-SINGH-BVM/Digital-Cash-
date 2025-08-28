import Page2 from "./Main/Page2/Page2";
import Main from "./Main/Page1/Page1";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    // <div>
    //   <Main />
    // </div>
    <div>
      {/* <Dark/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/individual" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

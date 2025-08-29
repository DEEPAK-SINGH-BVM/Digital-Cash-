import Page2 from "./Main/Page2/Page2";
import Page3 from "./Main/Page3/Page3";
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
          <Route path="/traders" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

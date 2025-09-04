import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Main from "../Page1/Page1";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Page5 from "../Page5/Page5";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navbar from "../../Components/Page1-All-Components/Navbar/Navbar";
function RouterPage() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/individual" element={<Page2 />} />
          <Route path="/traders" element={<Page3 />} />
          <Route path="/platforms" element={<Page4 />} />
          <Route path="/BugBounty" element={<Page5 />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RouterPage;

import Page2 from "./Main/Page2/Page2";
import Page3 from "./Main/Page3/Page3";
import Page4 from "./Main/Page4/Page4";
import Main from "./Main/Page1/Page1";
import { BrowserRouter, Routes, Route} from "react-router";
import Page5 from "./Main/Page5/Page5";
import PageNotFound from "./Main/PageNotFound/PageNotFound";
import Navbar from "./Components/Page1-All-Components/Navbar/Navbar";
import Footer from "./Components/Page1-All-Components/Footer/Footer";
function App() {
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

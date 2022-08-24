import Clients from "./Components/Clients/Clients";
import Home from "./Components/Home/Home";
import Navbar1 from "./Components/Navbar/Navbar";

import Services from "./Components/Services/Services";
import "./App.css";

import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUS from "./Components/AboutUS/AboutUS";
import RecentBlog from "./Components/RecentBlog/RecentBlog";
import Copyright from "./Components/Copyright/Copyright";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebDesign from "./Components/Services/WebDesign";
import MobileApp from "./Components/Services/MobileApp";
import CloudHosting from "./Components/Services/CloudHosting";
import Seo from "./Components/Services/Seo";

import GovtClients from "./Components/Clients/GovtClients";
import CorpoClients from "./Components/Clients/CorpoClients";

function App() {
  return (
    <>
      <div>
        <Navbar1 />

        <Home />
        <AboutUS />
      </div>
      <BrowserRouter>
        <Services />

        <Routes>
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="mobileapp" element={<MobileApp />} />
          <Route path="cloudhosting" element={<CloudHosting />} />
          <Route path="seo" element={<Seo />} />

          <Route path="/*" element={<WebDesign />} />
        </Routes>
        <Clients />
        <Routes>
          <Route path="/*" element={<GovtClients />} />
          <Route path="corpoClients" element={<CorpoClients />} />
        </Routes>
      </BrowserRouter>
      <div>
        <RecentBlog />
        <ContactUs />
        <Copyright />
      </div>
    </>
  );
}
export default App;

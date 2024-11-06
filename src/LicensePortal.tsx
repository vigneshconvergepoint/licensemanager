import { makeStyles } from "@fluentui/react-components";
import * as React from "react";
import {BrowserRouter ,Routes, Route } from "react-router-dom";
// local import:
import Navbar from "./components/Global/SideBar/NavBar"
import TopNavBar from "./components/Global/Header/TopNavBar";
import Home from "./components/Home/Home";

const useTotalWidth = makeStyles({
    expand: {
      width: "calc(100% - 220px)",
      "@media screen and (min-width: 1024px) and (max-width: 1200px)": {
        width: "calc(100% - 200px)",
      },
      "@media screen and (min-width: 768px) and (max-width: 1024px)": {
        width: "calc(100% - 180px)",
      },
      "@media screen and (max-width: 768px)": {
        width: "100%",
      },
    },
    collapse: {
      width: "calc(100% - 100px)",
    },
});

function LicensePortal() {
const [expanded, setExpanded] = React.useState(false);
const totalWidth = useTotalWidth();
console.log(totalWidth, "totalWidth");

  return (
    <BrowserRouter>
    <div className="d-flex">
     <Navbar setExpanded={setExpanded} />
      <div className={`${expanded ? totalWidth.expand : totalWidth.collapse}`}>
          <TopNavBar
            setExpanded={() => {
              setExpanded((prev) => !prev);
              }}
            />
             <div className="grayBg100 p-1 position-relative">
              <Routes>
               <Route  path="/" element={<Home/>}></Route>
              </Routes>
              <Routes>
               <Route path="/dashboard" element={<Home/>}></Route>
              </Routes>
             </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default LicensePortal

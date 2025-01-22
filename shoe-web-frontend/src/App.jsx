import { useState } from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home/>}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/testseries" element={<TestSeries />}/>
        <Route path="/scholarships" element={< Scholarships/>}/>
        <Route path="/results" element={< Results/>}/>
        <Route path="/results" element={< StudyMaterial/>}/>
        <Route path="/results" element={< AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

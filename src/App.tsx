import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import {CourseDetails} from "./pages/CourseDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

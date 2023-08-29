import "react-chatbot-kit/build/main.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<StudentInfo />} />
      </Routes>
    </>
  );
}

export default App;

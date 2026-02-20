import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/test" element={<Form />} />
    </Routes>
  );
}

export default App;

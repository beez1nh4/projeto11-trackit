import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SIgnUpPage.js/SIgnUpPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<SignUpPage />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ISSUES FACED
// issue: local host wouldn't connect
// solution: npm update then npm audit fix --force
// issue: mongoDB disconnected showed error of ECONNREFUSED 
// solution: mongo restart required, ip address had changed, new authentification string required

//cd backend then npm run dev
// cd frontend then npm start

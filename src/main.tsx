import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route index path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

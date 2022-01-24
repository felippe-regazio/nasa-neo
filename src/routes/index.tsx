import Index from '../pages/Index';
import About from '../pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default AppRoutes;
import Index from '../pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default AppRoutes;
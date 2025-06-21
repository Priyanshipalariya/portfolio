import { Routes, Route , BrowserRouter} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ToastContainer from "./components/ui/ToastContainer";

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

 
  )
}

export default App
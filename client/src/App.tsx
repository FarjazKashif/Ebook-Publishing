import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { AboutPage } from './pages/AboutPage';
import { EditingPage } from './pages/EditingPage';
import { CoverDesignPage } from './pages/CoverDesignPage';
import { ChildrensPage } from './pages/ChildrensPage';
import { FormattingPage } from './pages/FormattingPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import "./styles/infusion-publishing-cleaned.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/editing-proofreading" element={<EditingPage />} />
          <Route path="/services/book-cover-design" element={<CoverDesignPage />} />
          <Route path="/services/childrens-book-publishing" element={<ChildrensPage />} />
          <Route path="/services/book-formatting" element={<FormattingPage />} />
          <Route path="/services/illustrations" element={<IllustrationsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
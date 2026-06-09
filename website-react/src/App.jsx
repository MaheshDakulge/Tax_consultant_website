import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout Component
import Layout from './components/layout/Layout';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import IncomeTax from './pages/IncomeTax';
import Gst from './pages/Gst';
import TaxPlanning from './pages/TaxPlanning';
import BusinessReg from './pages/BusinessReg';
import Accounting from './pages/Accounting';
import NriTaxation from './pages/NriTaxation';
import KnowledgeBank from './pages/KnowledgeBank';
import Calculators from './pages/Calculators';
import Bulletins from './pages/Bulletins';
import Utilities from './pages/Utilities';
import Acts from './pages/Acts';
import Forms from './pages/Forms';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main App Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          {/* Services routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/income-tax" element={<IncomeTax />} />
          <Route path="services/gst" element={<Gst />} />
          <Route path="services/tax-planning" element={<TaxPlanning />} />
          <Route path="services/business-reg" element={<BusinessReg />} />
          <Route path="services/accounting" element={<Accounting />} />
          <Route path="services/nri-taxation" element={<NriTaxation />} />
          
          {/* Knowledge Bank routes */}
          <Route path="knowledge-bank" element={<KnowledgeBank />} />
          <Route path="knowledge-bank/calculators" element={<Calculators />} />
          <Route path="knowledge-bank/bulletins" element={<Bulletins />} />
          <Route path="knowledge-bank/utilities" element={<Utilities />} />
          <Route path="knowledge-bank/acts" element={<Acts />} />
          <Route path="knowledge-bank/forms" element={<Forms />} />
          
          {/* Blog routes */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          
          {/* Main sections */}
          <Route path="careers" element={<Careers />} />
          <Route path="events" element={<Events />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Legal pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />

          {/* Legacy .html Path Redirects for Clean URL Mapping & SEO Safety */}
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="about.html" element={<Navigate to="/about" replace />} />
          <Route path="services.html" element={<Navigate to="/services" replace />} />
          <Route path="income-tax.html" element={<Navigate to="/services/income-tax" replace />} />
          <Route path="gst.html" element={<Navigate to="/services/gst" replace />} />
          <Route path="tax-planning.html" element={<Navigate to="/services/tax-planning" replace />} />
          <Route path="business-reg.html" element={<Navigate to="/services/business-reg" replace />} />
          <Route path="accounting.html" element={<Navigate to="/services/accounting" replace />} />
          <Route path="nri-taxation.html" element={<Navigate to="/services/nri-taxation" replace />} />
          <Route path="knowledge-bank.html" element={<Navigate to="/knowledge-bank" replace />} />
          <Route path="calculators.html" element={<Navigate to="/knowledge-bank/calculators" replace />} />
          <Route path="bulletins.html" element={<Navigate to="/knowledge-bank/bulletins" replace />} />
          <Route path="utilities.html" element={<Navigate to="/knowledge-bank/utilities" replace />} />
          <Route path="acts.html" element={<Navigate to="/knowledge-bank/acts" replace />} />
          <Route path="forms.html" element={<Navigate to="/knowledge-bank/forms" replace />} />
          <Route path="blog.html" element={<Navigate to="/blog" replace />} />
          <Route path="careers.html" element={<Navigate to="/careers" replace />} />
          <Route path="events.html" element={<Navigate to="/events" replace />} />
          <Route path="testimonials.html" element={<Navigate to="/testimonials" replace />} />
          <Route path="contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="disclaimer.html" element={<Navigate to="/disclaimer" replace />} />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

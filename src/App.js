import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './components/home/HomePage';
import Packages from './components/packages/Packages';
import BlogPage from './components/Blog/BlogPage';
import ServicePage from './components/services/ServicePage';
import { Routes, Route } from 'react-router-dom';
import BlogList from './components/bloglist/BlogList';
import ProductPage from './components/product/ProductPage';
import CostCalculater from './components/Costcalculater/CostCalculater';
import ExploreProjects from './components/Exploreprojects/ExploreProjects';
import CCExpanded from './components/CCexpanded/CCExpanded';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cost-expanded" element={<CCExpanded/>}/>
        <Route path="/exploreprojects" element={<ExploreProjects/>}/>
        <Route path="/costcalculater" element={<CostCalculater/>}/>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path="/bloglist" element={<BlogList/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/services" element={<ServicePage />}/>
        <Route path="/" element={<HomePage />}/>

       </Routes>
      
    
    </div>
  );
}

export default App;

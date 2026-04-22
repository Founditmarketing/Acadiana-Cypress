/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import { WhyCypress, BrowseAll } from './pages/ProductHubs';
import BrowseWood from './pages/BrowseWood';
import { 
  Flooring, 
  HuntingBlinds, 
  Lumber, 
  Mantels, 
  PostsBeams, 
  TongueGroove, 
  WallsCeilings 
} from './pages/Products';
import { Gallery, Contact, NewLocation } from './pages/InfoPages';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-cypress" element={<WhyCypress />} />
          <Route path="/browse-all" element={<BrowseAll />} />
          <Route path="/browse-wood" element={<BrowseWood />} />
          <Route path="/product/flooring" element={<Flooring />} />
          <Route path="/product/hunting-blinds" element={<HuntingBlinds />} />
          <Route path="/product/lumber" element={<Lumber />} />
          <Route path="/product/mantels" element={<Mantels />} />
          <Route path="/product/posts-beams" element={<PostsBeams />} />
          <Route path="/product/tongue-groove" element={<TongueGroove />} />
          <Route path="/product/walls-ceilings" element={<WallsCeilings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-location" element={<NewLocation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

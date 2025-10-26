import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { View, StyleSheet } from 'react-native-web';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingScreen = () => (
  <View style={styles.loading}>
    <View style={styles.loadingText}>Loading...</View>
  </View>
);

function App() {
  return (
    <Router>
      <View style={styles.container}>
        <Navigation />
        <View style={styles.content}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </View>
        <Footer />
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
});

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExcursionsPage } from './pages/ExcursionsPage';
import { AccommodationPage } from './pages/AccommodationPage';
import { DiningPage } from './pages/DiningPage';
import { TourPage } from './pages/TourPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { PaymentPage } from './components/payment/PaymentPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route
              path="/excursiones"
              element={
                <ProtectedRoute>
                  <ExcursionsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alojamiento"
              element={
                <ProtectedRoute>
                  <AccommodationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comidas"
              element={
                <ProtectedRoute>
                  <DiningPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tour/:id"
              element={
                <ProtectedRoute>
                  <TourPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
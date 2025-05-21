import { BrowserRouter as Router, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./pages/LoadingScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import RulesScreen from "./pages/RulesScreen";
import NameScreen from "./pages/NameScreen";
import { useEffect, useState } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  const transition = { duration: 0.25 };

  const animationProps = {
    initial: { scale: 1.05, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    transition
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...animationProps}><LoadingScreen /></motion.div>} />
        <Route path="/welcome" element={<motion.div {...animationProps}><WelcomeScreen /></motion.div>} />
        <Route path="/rules" element={<motion.div {...animationProps}><RulesScreen /></motion.div>} />
        <Route path="/name" element={<motion.div {...animationProps}><NameScreen /></motion.div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
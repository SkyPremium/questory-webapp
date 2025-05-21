import { BrowserRouter as Router, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSound } from "./utils/useSound";
import transitionSound from "./assets/sounds/transition.mp3";
import LoadingScreen from "./pages/LoadingScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import RulesScreen from "./pages/RulesScreen";
import NameScreen from "./pages/NameScreen";

function AnimatedRoutes() {
  const location = useLocation();
  const playTransition = useSound(transitionSound, 0.8);
  const [showOverlay, setShowOverlay] = useState(false);
  const [pendingPath, setPendingPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== pendingPath) {
      setShowOverlay(true);
      playTransition();
      const timeout = setTimeout(() => {
        setPendingPath(location.pathname);
        setShowOverlay(false);
      }, 300); // длительность затемнения (в мс)
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  const animationProps = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.25, ease: "easeInOut" }
  };

  const renderScene = (path: string) => {
    switch (path) {
      case "/":
        return <LoadingScreen />;
      case "/welcome":
        return <WelcomeScreen />;
      case "/rules":
        return <RulesScreen />;
      case "/name":
        return <NameScreen />;
      default:
        return <Navigate to="/" replace />;
    }
  };

  return (
    <>
      {/* Основная анимированная сцена */}
      <motion.div
        key={pendingPath}
        className="w-screen h-screen bg-black"
        {...animationProps}
      >
        {renderScene(pendingPath)}
      </motion.div>

      {/* Затемняющий слой поверх */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
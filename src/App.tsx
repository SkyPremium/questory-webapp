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

  useEffect(() => {
    setShowOverlay(true);
    playTransition();
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const animationProps = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.25, ease: "easeInOut" }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div className="w-screen h-screen bg-black" {...animationProps}>
                <LoadingScreen />
              </motion.div>
            }
          />
          <Route
            path="/welcome"
            element={
              <motion.div className="w-screen h-screen bg-black" {...animationProps}>
                <WelcomeScreen />
              </motion.div>
            }
          />
          <Route
            path="/rules"
            element={
              <motion.div className="w-screen h-screen bg-black" {...animationProps}>
                <RulesScreen />
              </motion.div>
            }
          />
          <Route
            path="/name"
            element={
              <motion.div className="w-screen h-screen bg-black" {...animationProps}>
                <NameScreen
                  onSubmit={(nickname) => {
                    console.log("Ник сохранён:", nickname);
                    // Здесь можно перейти в главное меню или сохранить имя
                  }}
                />
              </motion.div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      {/* Затемнение поверх во время перехода */}
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

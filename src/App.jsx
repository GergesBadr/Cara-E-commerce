import { lazy } from "react";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ErrorFallback from "./components/ErrorFallback";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const Footer = lazy(() => import("./components/Footer"));

const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  // This and AnimatePresence component are for page transition logic (using framer-motion)
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <Suspense>
        <MotionConfig reducedMotion="user">
          <Header />
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => window.location.replace("/home")}
          >
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<SingleProduct />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </ErrorBoundary>
          <Footer />
        </MotionConfig>

        <Toaster
          toastOptions={{
            duration: 4000,
            ariaProps: { role: "alert", "aria-live": "polite" },
          }}
        />
      </Suspense>
    </ThemeContextProvider>
  );
}

export default App;

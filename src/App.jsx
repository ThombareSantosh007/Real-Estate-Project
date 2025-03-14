import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar-component/navbar";
import Error404 from "./error404";
import AboutProject from "./components/project-page-components/aboutProject";
import Products from "./products";
import About from "./components/about-page-componenets/about";
import HomePage from "./components/home-page-components/homePage";
import Featured from "./components/featured-&-popluar-page-component/featrued";
import Popular from "./components/featured-&-popluar-page-component/popluar";
import ContactPage from "./components/contact-page-component/contact-page";
import Results from "./results";
import AddProperty from "./addProperty";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useAuth } from "./context/authContext";

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, isSellerOrBroker } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!isSellerOrBroker()) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <div className="pt-16 min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/popular" element={<Popular />} />
              <Route
                path="/add-property"
                element={
                  <ProtectedRoute>
                    <AddProperty />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products/:id" element={<Products />} />
              <Route path="/projects/:id" element={<AboutProject />} />
              <Route path="/search" element={<Results />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

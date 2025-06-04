import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this runs when `isAuthenticated` changes

  if (!isAuthenticated) {
    return null; // Don't render anything if user is not authenticated (redirecting)
  }
  return <Outlet />;
};

export default ProtectedRoute;

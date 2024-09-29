import { useEffect } from "react";
import { useUser } from "../services/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  useEffect(
    function () {
      if (!user && !isLoading) navigate("/login");
    },
    [user, isLoading, navigate]
  );
  if (isLoading) return <></>;

  if (user) return children;
}

export default ProtectedRoute;

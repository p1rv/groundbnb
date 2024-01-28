import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  return { navigate, location, query };
};

import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';

function PublicRoute(props) {
  const { children } = props;
  const userAuthData = useAppSelector((state) => state.authorization);
  return userAuthData?.userData ? (
    userAuthData?.userData?.role == 3 ? (
      <Navigate to="/jobs" />
    ) : (
      <Navigate to="/job-listing" />
    )
  ) : (
    children
  );
}

export default PublicRoute;

import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import { useAppDispatch } from 'store';
import { useAppSelector } from 'store';
// import { getUserDetails } from 'store/thunk/authThunk';

function PrivateRoute(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const setUserData = useAppSelector((state) => state.authorization);
  const userData = setUserData?.userData;
  const myParam = urlParams.get('success');
  // const dispatch = useAppDispatch();
  const { children } = props;

  useEffect(() => {
    if (userData) {
      if (myParam == 'true') {
        const currentLocalStorageData = JSON.parse(localStorage.getItem('user_data'));
        const updatedData = {
          ...currentLocalStorageData,
          data: userData // Replace 'updatedUserData' with your updated data
        };
        localStorage.setItem('user_data', JSON.stringify(updatedData));
      }
    }
  }, [userData, myParam]);


  const userAuthData = useAppSelector((state) => state.authorization);
  return userAuthData.userData ? children : <Navigate to="/home" />;
}

export default PrivateRoute;

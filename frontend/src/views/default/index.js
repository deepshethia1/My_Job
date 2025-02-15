import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'store';

const DefaultRedirect = () => {
  const userData = useAppSelector((state) => state.authorization.userData);
  const navigate = useNavigate()
    useEffect(() => {
        if(userData?.role === 3){
            navigate('/jobs')
        }else{
            navigate('/job-listing')
        }
    }, [])
};

export default DefaultRedirect;

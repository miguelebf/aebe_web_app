import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('', { replace: true });
    } else {
      if (!user.emailVerified) {
        navigate('email-verify', { replace: true });
      }
      if (user.emailVerified && window.location.href.split('/').pop() === 'register-finca') {
        if (user.email == 'droldan@aebe.com' || user.email == 'miguelbustamantef@gmail.com') {
          navigate('register-finca', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }
      if (user.emailVerified && window.location.href.split('/').pop() === 'register') {
        if (user.email == 'droldan@aebe.com' || user.email == 'miguelbustamantef@gmail.com') {
          navigate('register-finca', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }
      if (user.emailVerified && window.location.href.split('/').pop() === 'register-company') {
        if (user.email == 'droldan@aebe.com' || user.email == 'miguelbustamantef@gmail.com') {
          navigate('register-finca', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }
    }
  }, [isLoggedIn, navigate]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;

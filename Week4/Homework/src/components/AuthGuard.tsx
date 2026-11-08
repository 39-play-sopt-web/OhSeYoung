import { useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuthStore } from '../stores/authStore';

function AuthGuard() {
  const authorizationCode = useAuthStore((state) => state.authorizationCode);
  const navigate = useNavigate();
  const isChecked = useRef(false);

  // StrictMode에서 alert 두 번 떠서 ref로 한 번만 확인
  useEffect(() => {
    if (isChecked.current) return;
    isChecked.current = true;

    if (!authorizationCode) {
      alert('회원 코드를 먼저 발급받아 주세요.');
      navigate('/', { replace: true });
    }
  }, [authorizationCode, navigate]);

  if (!authorizationCode) return null;
  return <Outlet />;
}

export default AuthGuard;

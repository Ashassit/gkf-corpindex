import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function MedRepVisitForm() {
  const navigate = useNavigate();
  useEffect(() => { navigate('/medrep-book', { replace: true }); }, [navigate]);
  return null;
}

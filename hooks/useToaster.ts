import { useState, useEffect } from 'react';

const useToast = (initialVisibility = false) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const [message, setMessage] = useState<string>('');
  const [sucess, setSucess] = useState<boolean>();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const showToast = (duration = 3000, isSucess: boolean, msg = '') => {
    setMessage(msg);
    setSucess(isSucess);
    setIsVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setIsVisible(false);
      setMessage('');
    }, duration);

    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return { isVisible, message, showToast, sucess };
};

export default useToast;

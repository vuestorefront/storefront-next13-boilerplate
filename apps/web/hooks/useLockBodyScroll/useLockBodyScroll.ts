import { useEffect } from 'react';
import { useDisclosure } from '@storefront-ui/react';

export function useLockBodyScroll() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [isOpen]);

  return {
    isOpen,
    open,
    close,
  };
}

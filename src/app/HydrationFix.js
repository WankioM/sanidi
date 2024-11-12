// app/components/HydrationFix.js
'use client';

import { useEffect, useState } from 'react';

export function HydrationFix() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = '[data-new-gr-c-s-check-loaded], [data-gr-ext-installed] { display: none; }';
      document.head.appendChild(style);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return null;
}
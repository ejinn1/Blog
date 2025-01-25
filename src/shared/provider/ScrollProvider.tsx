'use client';

import { ReactNode, useEffect, useRef } from 'react';

import { useTopRefStore } from '@/widgets/Footer/model/useTopRefStore';

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const { setTopRef } = useTopRefStore();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      setTopRef(topRef);
    }
  }, [setTopRef]);

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-x-hidden overflow-y-scroll">
      <div ref={topRef} />
      {children}
    </div>
  );
};

export default ScrollProvider;

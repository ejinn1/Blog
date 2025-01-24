'use client';

import { ReactNode, useState } from 'react';

interface ToggleProps {
  summary: string;
  children?: ReactNode;
}

const Toggle = ({ summary, children }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <details open={isOpen} className="relative">
      <summary onClick={toggleOpen} className="dark:text-gray-100">
        {summary}
      </summary>
      {children && (
        <>
          <div className="pb-24 dark:text-gray-100">{children}</div>
          <button
            onClick={toggleOpen}
            className="absolute bottom-0 right-0 rounded-4 bg-gray-100 px-4 dark:bg-gray-400 dark:text-gray-100"
          >
            닫기
          </button>
        </>
      )}
    </details>
  );
};

export default Toggle;

import { useEffect, useState } from 'react';

import { TocItem } from './types';

export const useToc = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  const handleClickHeading = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3');
    const items: TocItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: Number(element.tagName.charAt(1)),
    }));

    setHeadings(items);
    setActiveId(items[0].id);
  }, []);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-72px 0px -80% 0px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('h2, h3');
    elements.forEach((elem) => observer.observe(elem));

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  return { headings, activeId, handleClickHeading };
};

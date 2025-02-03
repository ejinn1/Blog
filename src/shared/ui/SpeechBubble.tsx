import { ReactNode } from 'react';

interface SpeechBubbleProps {
  text: ReactNode;
}

const SpeechBubble = ({ text }: SpeechBubbleProps) => {
  return (
    <div className="relative flex justify-start pl-8">
      <div className="bg-beige-300 w-max rounded-[12px] p-12 text-sm font-semibold text-gray-400 dark:bg-gray-400 dark:text-gray-100">
        <div className="border-t-beige-300 absolute -left-7 top-16 size-0 border-l-[15px] border-t-[15px] border-l-transparent dark:border-t-gray-400" />
        {text}
      </div>
    </div>
  );
};

export default SpeechBubble;

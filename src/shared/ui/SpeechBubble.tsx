interface SpeechBubbleProps {
  text: string;
}

const SpeechBubble = ({ text }: SpeechBubbleProps) => {
  return (
    <div className="flex justify-start pl-8">
      <div className="relative w-max rounded-[12px] bg-gray-100 p-12 text-sm font-semibold text-gray-400">
        <div className="absolute -left-15 top-16 size-0 border-l-[15px] border-t-[15px] border-l-transparent border-t-gray-100"></div>
        {text}
      </div>
    </div>
  );
};

export default SpeechBubble;

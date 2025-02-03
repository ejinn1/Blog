import SpeechBubble from '@/shared/ui/SpeechBubble';

const IntroduceSection = () => {
  return (
    <section aria-labelledby="introduce" className="mb-40 w-full px-20">
      <SpeechBubble
        text={
          <>
            <p>안녕하세요, 유의진입니다.</p>
            <p>프론트엔드 공부를 하고 있습니다.</p>
          </>
        }
      />
    </section>
  );
};

export default IntroduceSection;

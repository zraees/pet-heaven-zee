import { useEffect, useState } from 'react';

const useAnimationOnce = (animationKey: string) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem(animationKey);

    if (!hasPlayed) {
      setShouldAnimate(true);
      localStorage.setItem(animationKey, 'true');
    }
  }, [animationKey]);

  return shouldAnimate;
};

export default useAnimationOnce;

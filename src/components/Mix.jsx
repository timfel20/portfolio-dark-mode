import { useWindowSize } from 'react-use';
import { Slider } from './ImageSlider';
import { Service } from './Service';

export function Mix() {
  const { width } = useWindowSize();

  return (
    <div>
      {width > 1080 ? (
        <Slider />
      ) : (
        <Service />
      )}
    </div>
  );
}

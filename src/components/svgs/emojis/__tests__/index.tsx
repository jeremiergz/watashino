import NerdIcon from '@/components/svgs/emojis/Nerd';
import SadIcon from '@/components/svgs/emojis/Sad';
import ReactTestRenderer from 'react-test-renderer';

describe('@/components/svgs/emojis Test Suite', () => {
  describe('Happy Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <NerdIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Sad Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <SadIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});

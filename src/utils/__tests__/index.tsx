import { isBrowser } from '@/utils';

describe('@/utils Test Suite', () => {
  describe('isBrowser Test Suite', () => {
    describe('when running in browser', () => {
      it('returns true', () => {
        expect(isBrowser()).toBe(true);
      });
    });

    describe('when running on server', () => {
      let originalWindow: Window;

      beforeAll(() => {
        originalWindow = global.window;
        Object.defineProperty(global, 'window', {
          value: undefined,
          writable: true,
        });
      });

      afterAll(() => {
        Object.defineProperty(global, 'window', {
          value: originalWindow,
        });
      });

      it('returns false', () => {
        expect(isBrowser()).toBe(false);
      });
    });
  });
});

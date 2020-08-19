import EmojiAstonished from 'components/svg/EmojiAstonished';
import EmojiNerd from 'components/svg/EmojiNerd';
import EmojiUgly from 'components/svg/EmojiUgly';
import React from 'react';
import ReactTestRenderer, { act, ReactTestInstance } from 'react-test-renderer';
import EmojiMarker from '..';

describe('components/common/LocationMap/EmojiMarker Test Suite', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('matches snapshot', () => {
    const jsx = <EmojiMarker onClick={null} />;
    expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });

  it('should update Emoji on click', () => {
    const onClickMock = jest.fn();
    const jsx = <EmojiMarker onClick={onClickMock} />;
    const renderedInstance = ReactTestRenderer.create(jsx).root;
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(EmojiNerd);
    act(() => {
      (renderedInstance.children[0] as ReactTestInstance).props.onClick();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(EmojiAstonished);
    act(() => {
      (renderedInstance.children[0] as ReactTestInstance).props.onClick();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(EmojiUgly);
    expect(onClickMock).toHaveBeenCalledTimes(2);
    act(() => {
      jest.runAllTimers();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(EmojiNerd);
  });
});

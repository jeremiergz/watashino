import AstonishedIcon from 'components/svg/emojis/Astonished';
import NerdIcon from 'components/svg/emojis/Nerd';
import UglyIcon from 'components/svg/emojis/Ugly';
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
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(NerdIcon);
    act(() => {
      (renderedInstance.children[0] as ReactTestInstance).props.onClick();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(AstonishedIcon);
    act(() => {
      (renderedInstance.children[0] as ReactTestInstance).props.onClick();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(UglyIcon);
    expect(onClickMock).toHaveBeenCalledTimes(2);
    act(() => {
      jest.runAllTimers();
    });
    expect((renderedInstance.children[0] as ReactTestInstance).type).toBe(NerdIcon);
  });
});

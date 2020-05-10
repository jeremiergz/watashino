import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import A2HSIcon from '../A2HS';
import BookIcon from '../Book';
import BusinessIcon from '../Business';
import CloseIcon from '../Close';
import CopyIcon from '../Copy';
import DescriptionIcon from '../Description';
import DownloadIcon from '../Download';
import EmojiAstonishedIcon from '../EmojiAstonished';
import EmojiNerdIcon from '../EmojiNerd';
import EmojiUglyIcon from '../EmojiUgly';
import HouseIcon from '../House';
import MoodIcon from '../Mood';
import MoonIcon from '../Moon';
import PersonIcon from '../Person';
import SunIcon from '../Sun';

describe('components/svg Test Suite', () => {
  describe('A2HS Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <A2HSIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Book Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <BookIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Business Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <BusinessIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Close Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <CloseIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Copy Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <CopyIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Description Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <DescriptionIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Download Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <DownloadIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('EmojiAstonished Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <EmojiAstonishedIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('EmojiNerd Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <EmojiNerdIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('EmojiUgly Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <EmojiUglyIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('House Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <HouseIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Mood Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <MoodIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Moon Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <MoonIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Person Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <PersonIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Sun Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <SunIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});

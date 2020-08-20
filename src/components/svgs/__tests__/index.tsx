import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import EmailIcon from '../contacts/Email';
import FacebookIcon from '../contacts/Facebook';
import GitHubIcon from '../contacts/GitHub';
import GitLabIcon from '../contacts/GitLab';
import InstagramIcon from '../contacts/Instagram';
import LinkedInIcon from '../contacts/LinkedIn';
import MessengerIcon from '../contacts/Messenger';
import PhoneIcon from '../contacts/Phone';
import RedditIcon from '../contacts/Reddit';
import SkypeIcon from '../contacts/Skype';
import TwitterIcon from '../contacts/Twitter';
import WhatsappIcon from '../contacts/Whatsapp';
import EmojiAstonishedIcon from '../emojis/Astonished';
import EmojiNerdIcon from '../emojis/Nerd';
import EmojiUglyIcon from '../emojis/Ugly';
import A2HSIcon from '../icons/A2HS';
import BookIcon from '../icons/Book';
import BusinessIcon from '../icons/Business';
import CloseIcon from '../icons/Close';
import CopyIcon from '../icons/Copy';
import DescriptionIcon from '../icons/Description';
import DownloadIcon from '../icons/Download';
import HouseIcon from '../icons/House';
import MoodIcon from '../icons/Mood';
import MoonIcon from '../icons/Moon';
import PersonIcon from '../icons/Person';
import SunIcon from '../icons/Sun';

describe('components/svg Test Suite', () => {
  describe('contacts Test Suite', () => {
    describe('Email Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <EmailIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Facebook Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <FacebookIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('GitHub Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitHubIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('GitLab Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <GitLabIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Instagram Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <InstagramIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('LinkedIn Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <LinkedInIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
    describe('Messenger Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <MessengerIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Phone Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <PhoneIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Reddit Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <RedditIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Skype Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <SkypeIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Twitter Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <TwitterIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Whatsapp Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <WhatsappIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('emojis Test Suite', () => {
    describe('Astonished Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <EmojiAstonishedIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Nerd Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <EmojiNerdIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });

    describe('Ugly Test Suite', () => {
      it('matches snapshot', () => {
        const jsx = <EmojiUglyIcon />;
        expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('icons Test Suite', () => {
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
});

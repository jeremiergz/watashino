import EmailIcon from '@/components/svgs/contacts/Email';
import GitHubIcon from '@/components/svgs/contacts/GitHub';
import GitLabIcon from '@/components/svgs/contacts/GitLab';
import LinkedInIcon from '@/components/svgs/contacts/LinkedIn';
import TwitterIcon from '@/components/svgs/contacts/Twitter';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

describe('@/components/svgs/contacts Test Suite', () => {
  describe('Email Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <EmailIcon />;
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

  describe('LinkedIn Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <LinkedInIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });

  describe('Twitter Test Suite', () => {
    it('matches snapshot', () => {
      const jsx = <TwitterIcon />;
      expect(ReactTestRenderer.create(jsx).toJSON()).toMatchSnapshot();
    });
  });
});

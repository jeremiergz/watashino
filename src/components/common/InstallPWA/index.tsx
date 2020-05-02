import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Flex from '../../primitives/Flex';
import Text from '../../primitives/Text';
import A2HSIcon from '../../svg/A2HS';
import CloseIcon from '../../svg/Close';
import Button from '../Button';
import Image from '../Image';

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
};

const eventName = 'beforeinstallprompt';

const InstallPWA: FunctionComponent = () => {
  const { appIcon } = useStaticQuery(graphql`
    query InstallPWAData {
      appIcon: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fixed(height: 32, width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isPWAReady, setIsPWAReady] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent>(null);
  const handleClose = () => {
    trackCustomEvent({
      action: 'click',
      category: 'Install PWA App',
      value: 0,
    });
    setIsDisplayed(false);
  };
  const handleInstall = () => {
    trackCustomEvent({
      action: 'click',
      category: 'Install PWA App',
      value: 1,
    });
    if (promptInstall) promptInstall.prompt();
  };
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setIsPWAReady(true);
      setPromptInstall(e);
    };
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, []);
  return (
    <Flex
      alignItems="center"
      backgroundColor="secondary"
      borderTopLeftRadius={{ mobileL: 8 }}
      borderTopRightRadius={{ mobileL: 8 }}
      bottom={0}
      justifyContent={{ _: 'center', mobileL: 'flex-start' }}
      left={0}
      margin="auto"
      padding={2}
      position="fixed"
      right={0}
      transform={isPWAReady && isDisplayed ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)'}
      transition="transform 250ms"
      width={{ mobileL: 256 }}
    >
      <Flex alignItems="center" justifyContent="center">
        <Button onClick={handleInstall} paddingX={3}>
          <Image fixed={appIcon.childImageSharp.fixed} imgStyle={{ height: 32, width: 32 }} />
          <Text fontSize={18} marginLeft={3} marginRight={2}>
            Install App
          </Text>
          <A2HSIcon fill="white" height={24} width={24} />
        </Button>
      </Flex>
      <Button onClick={handleClose} paddingRight={3} position="absolute" right={0}>
        <CloseIcon fill="white" height={25} width={25} />
      </Button>
    </Flex>
  );
};

InstallPWA.displayName = 'InstallPWA';

export default InstallPWA;

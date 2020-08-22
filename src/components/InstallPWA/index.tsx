import React, { useEffect } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
};

const eventName = 'beforeinstallprompt';

const InstallPWA: React.FC = () => {
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      e.prompt();
    };
    window.addEventListener(eventName, handler);
    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, []);
  return null;
};

InstallPWA.displayName = 'InstallPWA';

export default InstallPWA;

import { PageProps } from 'gatsby';
import { useEffect } from 'react';

function NotFoundPage({ navigate }: PageProps): JSX.Element {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
}

export default NotFoundPage;

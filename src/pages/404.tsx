import SEO from '@/components/common/SEO';
import { PageProps } from 'gatsby';
import { useEffect } from 'react';

function NotFoundPage({ navigate }: PageProps): JSX.Element {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
}

export function Head(): JSX.Element {
  return <SEO />;
}

export default NotFoundPage;

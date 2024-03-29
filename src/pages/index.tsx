import SEO from '@/components/common/SEO';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Main from '@/components/layout/Layout/Main';
import WhereAmI from '@/components/modules/WhereAmI';
import WhoAmI from '@/components/modules/WhoAmI';
import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { useState } from 'react';

function IndexPage(_: PageProps): JSX.Element {
  const [contentToDisplay, setContentToDisplay] = useState<'whereami' | 'whoami'>('whoami');

  return (
    <Layout>
      <Header current={contentToDisplay} onCurrentChange={setContentToDisplay} />
      <Main>
        <div className="flex [perspective:1000px]">
          <div
            className={clsx(
              'flex transition-transform duration-500 [transform-style:preserve-3d]',
              contentToDisplay === 'whereami' && 'flip-h md:flip-v',
            )}
          >
            <WhoAmI className="card-front" />

            <WhereAmI className="card-back-h md:card-back-v md:max-h-[610px]" />
          </div>
        </div>
      </Main>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return <SEO />;
}

export default IndexPage;

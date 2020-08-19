import Link from 'components/Link';
import Box from 'components/primitives/Box';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { license, repository, version },
    },
  } = useStaticQuery(graphql`
    query FooterData {
      site {
        siteMetadata {
          license
          repository {
            url
          }
          version
        }
      }
    }
  `);
  const repositoryURL = repository.url.replace(/git\+|\.git/g, '');
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;
  return (
    <Box
      as="footer"
      bottom={0}
      left={0}
      padding={{ _: 16, tablet: 32 }}
      position="absolute"
      right={0}
      textAlign="center"
    >
      <Link borderBottom="1px dashed gray" color="gray" external to={sourceCodeURL}>
        {`v${version} - source code`}
      </Link>
      <Box color="gray" fontSize={14} marginTop={1}>{`licensed under the ${license} license`}</Box>
    </Box>
  );
};

Footer.displayName = 'Footer';

export default Footer;

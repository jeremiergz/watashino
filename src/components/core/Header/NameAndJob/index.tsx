import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
import Heading from '../../../common/Heading';
import Link from '../../../common/Link';
import Flex from '../../../primitives/Flex';

const NameAndJob = () => {
  const { dataJson, file } = useStaticQuery<GraphQL.HeaderDataQuery>(graphql`
    query HeaderData {
      dataJson {
        jobTitle
      }
      file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fixed(height: 80, width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <Link
      alignItems="center"
      display="flex"
      flexDirection={{ _: 'column', tablet: 'row' }}
      justifyContent={{ _: 'center', tablet: 'flex-start' }}
      textAlign={{ _: 'center', tablet: 'left' }}
      to="/about-me"
    >
      <Img fixed={file.childImageSharp.fixed as FixedObject} imgStyle={{ height: '80px', width: '80px' }} />
      <Flex flexDirection="column" justifyContent="center" marginLeft={{ tablet: 2 }}>
        <Heading color="primary" fontWeight="bold" letterSpacing={-1} margin={0} padding={2} variant="h3" zIndex={1}>
          Jeremie Rodriguez
        </Heading>
        <Heading
          fontWeight="semi-bold"
          margin={0}
          marginTop={-2}
          paddingBottom={2}
          paddingTop={0}
          paddingX={2}
          variant="h4"
        >
          {dataJson.jobTitle}
        </Heading>
      </Flex>
    </Link>
  );
};

NameAndJob.displayName = 'NameAndJob';

export default NameAndJob;

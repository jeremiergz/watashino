import Heading from 'components/Heading';
import Image from 'components/Image';
import Link from 'components/Link';
import FlexBox from 'components/primitives/FlexBox';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Routes } from 'utils/Routes';

const NameAndJob: React.FC = () => {
  const { dataJson, file } = useStaticQuery(graphql`
    query HeaderData {
      dataJson {
        jobTitle
      }
      file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fixed(height: 80, quality: 100, width: 80) {
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
      to={Routes.aboutMe}
    >
      <Image fixed={file.childImageSharp.fixed} imgStyle={{ height: 80, width: 80 }} />
      <FlexBox flexDirection="column" justifyContent="center" marginLeft={{ tablet: 2 }}>
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
      </FlexBox>
    </Link>
  );
};

NameAndJob.displayName = 'NameAndJob';

export default NameAndJob;

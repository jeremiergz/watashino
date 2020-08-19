import Image from 'components/Image';
import Layout from 'components/Layout';
import Link from 'components/Link';
import LocationMap from 'components/LocationMap';
import Paragraph from 'components/Paragraph';
import Box from 'components/primitives/Box';
import Flex from 'components/primitives/FlexBox';
import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'theme';
import { Routes } from 'utils/Routes';
import { beginsWithVowel } from 'utils/Text';

const Technologies = styled(Flex)`
  @media screen and (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints[3]}) {
    > :first-child {
      margin-left: 0;
    }
    > :last-child {
      margin-right: 0;
    }
  }
`;

const AboutMePage: React.FC = () => {
  const {
    companyImg: {
      childImageSharp: { fixed: companyImgFixed },
    },
    contactImgs: { nodes: contactImgNodes },
    coverImg: {
      childImageSharp: { fluid: coverImgFluid },
    },
    pageData: { keywords, name },
    personalDetails: { company, contacts, jobTitle, location, openToGigs },
    techImgs: { nodes: techImgNodes },
    techs: { nodes: technologies },
  } = useStaticQuery(graphql`
    query AboutMePageData {
      companyImg: file(relativePath: { eq: "company.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      contactImgs: allFile(filter: { relativePath: { regex: "/contact-/" } }) {
        nodes {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      coverImg: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pageData: navigationJson(page: { eq: "AboutMePage" }) {
        keywords
        name
      }
      personalDetails: dataJson {
        company {
          name
          website
        }
        contacts {
          img
          label
          url
        }
        jobTitle
        location {
          city
          website
        }
        openToGigs
      }
      techImgs: allFile(filter: { relativePath: { regex: "/tech-/" } }) {
        nodes {
          base
          childImageSharp {
            fixed(height: 52, width: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      techs: allTechnologiesJson {
        nodes {
          img
          name
          website
        }
      }
    }
  `);
  const contactObjects: { img: FluidObject; label: string; url: string }[] = contacts.reduce((acc, rawContact) => {
    const { img, label, url } = rawContact;
    const contact = {
      img: contactImgNodes.find(i => i.base === img).childImageSharp.fluid,
      label,
      url,
    };
    acc.push(contact);
    return acc;
  }, []);
  const technologyObjects: { img: FixedObject; name: string; website: string }[] = technologies.reduce(
    (acc, rawTechnology) => {
      const { img, name, website } = rawTechnology;
      const contact = {
        img: techImgNodes.find(i => i.base === img).childImageSharp.fixed,
        name,
        website,
      };
      acc.push(contact);
      return acc;
    },
    [],
  );
  const mailto = contacts.find(c => c.url.startsWith('mailto:'));
  return (
    <Layout>
      <Layout.Content keywords={keywords} path={Routes.aboutMe} title={name} type="section">
        <Flex alignItems="center" justifyContent="center" marginBottom={4}>
          {contactObjects.map(({ img, label, url }) => (
            <Link external key={url} to={url}>
              <Box paddingX={2} width={{ _: 32, mobileM: 38 }}>
                <Image alt={label} fluid={img} />
              </Box>
            </Link>
          ))}
        </Flex>
        <Image alt="Cover" fluid={coverImgFluid} imgStyle={{ borderRadius: 8 }} loading="auto" />
        <Paragraph marginTop={4}>{`Hi there, I'm Jeremie!`}</Paragraph>
        <Paragraph>
          {`I'm a${beginsWithVowel(jobTitle) ? 'n' : ''} ${jobTitle} freelancer, previously working at `}
          <Link display="inline-flex" external height="26px" to={company.website} verticalAlign="middle">
            <Image alt={company.name} fixed={companyImgFixed} marginTop="2px" Tag="span" />
          </Link>
          {`.`}
        </Paragraph>
        <Paragraph>{'I particularly enjoy working with those technologies:'}</Paragraph>
        <Technologies flexWrap="wrap" justifyContent={{ _: 'center', tablet: 'space-between' }}>
          {technologyObjects.map(({ img, name, website }) => (
            <Link external key={name} margin={2} to={website}>
              <Image alt={name} fixed={img} imgStyle={{ height: '52px', width: '52px' }} />
            </Link>
          ))}
        </Technologies>
        {openToGigs && (
          <Paragraph>
            {`Feel free to `}
            <Link external to={mailto.url} variant="underlined">
              contact me
            </Link>
            {` if you're interested!`}
          </Paragraph>
        )}
        <Box fontSize={20} marginBottom={2} marginTop={5}>
          {'▾ By the way, this is where I live, '}
          <Link external to={location.website}>
            {location.city}
          </Link>
          {'! ▾'}
        </Box>
        <LocationMap />
      </Layout.Content>
    </Layout>
  );
};

AboutMePage.displayName = 'AboutMePage';

export default AboutMePage;

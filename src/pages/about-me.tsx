import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Link from '../components/common/Link';
import LocationMap from '../components/common/LocationMap';
import Paragraph from '../components/common/Paragraph';
import Layout from '../components/core/Layout';
import Box from '../components/primitives/Box';
import Flex from '../components/primitives/Flex';
import { Theme } from '../theme';
import { Routes } from '../utils/Routes';

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

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

const AboutMePage = () => {
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
  } = useStaticQuery<GraphQL.AboutMePageDataQuery>(graphql`
    query AboutMePageData {
      companyImg: file(relativePath: { eq: "company.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      contactImgs: allFile(filter: { relativePath: { regex: "/contact-/" } }) {
        nodes {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      coverImg: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyImageSharpFixed_withWebp
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
  const jobTitleStartsWithVowel = vowels.includes(jobTitle.charAt(0).toLowerCase());
  const mailto = contacts.find(c => c.url.startsWith('mailto:'));
  return (
    <Layout>
      <Layout.Content keywords={keywords} path={Routes.aboutMe} title={name} type="section">
        <Flex alignItems="center" justifyContent="center" marginBottom={4}>
          {contactObjects.map(({ img, label, url }) => (
            <Link key={url} to={url} external>
              <Box paddingX={2} width={{ _: 32, mobileM: 38 }}>
                <Img alt={label} fluid={img} imgStyle={{ height: '100%', width: '100%' }} />
              </Box>
            </Link>
          ))}
        </Flex>
        <Img alt="Cover" fluid={coverImgFluid} imgStyle={{ borderRadius: 8 }} />
        <Paragraph marginTop={4}>{`Hi there, I'm Jeremie!`}</Paragraph>
        <Paragraph>
          {`I'm currently working at `}
          <Link display="inline-flex" height="26px" to={company.website} external verticalAlign="middle">
            <Img alt={company.name} fixed={companyImgFixed} imgStyle={{ height: '25px' }} Tag="span" />
          </Link>
          {` as a${jobTitleStartsWithVowel ? 'n' : ''} ${jobTitle}.`}
        </Paragraph>
        <Paragraph>{'I particularly enjoy working with those technologies:'}</Paragraph>
        <Technologies flexWrap="wrap" justifyContent={{ _: 'center', tablet: 'flex-start' }}>
          {technologyObjects.map(({ img, name, website }) => (
            <Link key={name} to={website} external margin={2}>
              <Img alt={name} fixed={img} imgStyle={{ height: '52px', width: '52px' }} />
            </Link>
          ))}
        </Technologies>
        {openToGigs && (
          <Paragraph>
            {` I'm also doing freelancing gigs, feel free to `}
            <Link to={mailto.url} external variant="underlined">
              contact me
            </Link>
            {` if you're interested!`}
          </Paragraph>
        )}
        <Box fontSize={20} marginBottom={2} marginTop={5}>
          {'▾ By the way, this is where I live, '}
          <Link to={location.website} external>
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

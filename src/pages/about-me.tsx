import Image from 'components/Image';
import Layout from 'components/Layout';
import Link from 'components/Link';
import LocationMap from 'components/LocationMap';
import Paragraph from 'components/Paragraph';
import Box from 'components/primitives/Box';
import FlexBox from 'components/primitives/FlexBox';
import { useTheme } from 'components/providers/ThemeProvider';
import EmailIcon from 'components/svgs/contacts/Email';
import FacebookIcon from 'components/svgs/contacts/Facebook';
import GitHubIcon from 'components/svgs/contacts/GitHub';
import GitLabIcon from 'components/svgs/contacts/GitLab';
import InstagramIcon from 'components/svgs/contacts/Instagram';
import LinkedInIcon from 'components/svgs/contacts/LinkedIn';
import MessengerIcon from 'components/svgs/contacts/Messenger';
import PhoneIcon from 'components/svgs/contacts/Phone';
import RedditIcon from 'components/svgs/contacts/Reddit';
import SkypeIcon from 'components/svgs/contacts/Skype';
import TwitterIcon from 'components/svgs/contacts/Twitter';
import WhatsappIcon from 'components/svgs/contacts/Whatsapp';
import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Routes } from 'utils/Routes';
import { beginsWithVowel } from 'utils/Text';

const contactIcons: Record<Models.Contact['type'], React.ReactNode> = {
  email: EmailIcon,
  facebook: FacebookIcon,
  github: GitHubIcon,
  gitlab: GitLabIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  messenger: MessengerIcon,
  phone: PhoneIcon,
  reddit: RedditIcon,
  skype: SkypeIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
};

const AboutMePage: React.FC = () => {
  const { theme } = useTheme();
  const {
    companyImg: {
      childImageSharp: { fixed: companyImgFixed },
    },
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
          fixed(height: 25, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      coverImg: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fluid(quality: 100) {
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
          label
          type
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
            fixed(height: 52, quality: 100, width: 52) {
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
  const technologyObjects: { img: FixedObject; name: string; website: string }[] = technologies.reduce(
    (acc, rawTechnology) => {
      const { img, name, website } = rawTechnology;
      const tech = {
        img: techImgNodes.find(i => i.base === img).childImageSharp.fixed,
        name,
        website,
      };
      acc.push(tech);
      return acc;
    },
    [],
  );
  const mailto = contacts.find(c => c.url.startsWith('mailto:'));
  return (
    <Layout>
      <Layout.Content keywords={keywords} path={Routes.aboutMe} title={name} type="section">
        <FlexBox alignItems="center" justifyContent="center" marginBottom={4}>
          {contacts.map(({ label, type, url }, index) => {
            const isEven = index % 2 === 0;
            const fillColor = isEven ? theme.colors.secondary : theme.colors.primary;
            const Icon = contactIcons[type];
            return (
              <Link external key={url} to={url}>
                <Box paddingX={2} width={{ _: 32, mobileM: 38 }}>
                  <Icon fill={fillColor} />
                </Box>
              </Link>
            );
          })}
        </FlexBox>
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
        <FlexBox flexWrap="wrap" justifyContent={{ _: 'center', tablet: 'space-between' }}>
          {technologyObjects.map(({ img, name, website }, index) => (
            <Link
              external
              key={name}
              marginLeft={{ _: 2, tablet: index !== 0 ? 2 : 0 }}
              marginRight={{ _: 2, tablet: index !== technologyObjects.length - 1 ? 2 : 0 }}
              marginY={2}
              to={website}
            >
              <Image alt={name} fixed={img} imgStyle={{ height: '52px', width: '52px' }} />
            </Link>
          ))}
        </FlexBox>
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

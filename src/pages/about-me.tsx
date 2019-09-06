import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';
import LocationMap from '../components/LocationMap';
import Box from '../components/primitives/Box';
import Flex from '../components/primitives/Flex';
import Link from '../components/widgets/Link';
import Paragraph from '../components/widgets/Paragraph';

const aboutMeNav = Navigation.links.aboutMe;

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

const GorillaImage = styled(Img)`
    border-radius: 8px;
`;

const ContactImage = styled(Img)`
    height: 100%;
    width: 100%;
`;

const AboutMePage = () => {
    const {
        allFile: { nodes: imgNodes },
        dataJson: { company, contacts, jobTitle, location },
        file: {
            childImageSharp: { fluid: coverImgFluid },
        },
    } = useStaticQuery<GraphQL.AboutMePageDataQueryQuery>(graphql`
        query AboutMePageDataQuery {
            dataJson {
                company {
                    name
                    website
                }
                jobTitle
                location {
                    city
                }
                contacts {
                    img
                    label
                    url
                }
            }
            allFile(filter: { relativePath: { regex: "/contact-/" } }) {
                nodes {
                    base
                    childImageSharp {
                        fixed(width: 48, height: 48) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
            file(relativePath: { eq: "gorilla.png" }) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    const jobTitleStartsWithVowel = vowels.includes(jobTitle.charAt(0).toLowerCase());
    return (
        <Layout>
            <Layout.Content title={aboutMeNav.name} keywords={aboutMeNav.keywords}>
                <GorillaImage fluid={coverImgFluid as FluidObject} />
                <Paragraph>{`Hi there, I'm Jeremie!`}</Paragraph>
                <Paragraph>
                    {`I'm currently working at `}
                    <Link to={company.website} external>
                        {company.name}
                    </Link>
                    {' in '}
                    <Link to="/">{location.city}</Link>
                    {` as a${jobTitleStartsWithVowel ? 'n' : ''} ${jobTitle}.`}
                </Paragraph>
            </Layout.Content>
            <Flex alignItems="center" justifyContent="center" margin={5}>
                {contacts.map(({ img, url }) => (
                    <Link key={url} to={url} external>
                        <Box paddingX={2} width={[32, 48]}>
                            <ContactImage
                                as={Img}
                                fixed={imgNodes.find(i => i.base === img).childImageSharp.fixed as FixedObject}
                            />
                        </Box>
                    </Link>
                ))}
            </Flex>
            <LocationMap />
        </Layout>
    );
};

AboutMePage.displayName = 'AboutMePage';

export default AboutMePage;

import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../../theme';
import Heading from '../../../widgets/Heading';
import BaseLink from '../../../widgets/Link';

const Container = styled.div``;

const Link = styled(BaseLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${theme.breakpoints.minWidth.tablet} {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.text};
    ${theme.breakpoints.minWidth.tablet} {
        margin-left: 8px;
    }
`;

const Name = styled(Heading)`
    margin: 0;
    font-weight: ${theme.fonts.main.weight.bold};
    letter-spacing: -1px;
    transition: color 100ms ease-in-out;
    padding: 8px;
    z-index: 1;
    :hover {
        color: ${theme.colors.secondary};
    }
`;

const JobTitle = styled(Heading)`
    margin: 0;
    font-weight: ${theme.fonts.main.weight.semiBold};
    margin-top: -8px;
    padding: 0 8px 8px 8px;
`;

const NameAndJobComponent = () => {
    const { dataJson, file } = useStaticQuery<GraphQL.PersonalDetailsQueryQuery>(graphql`
        query PersonalDetailsQuery {
            dataJson {
                jobTitle
            }
            file(relativePath: { eq: "profile-pic.png" }) {
                childImageSharp {
                    fixed(width: 80, height: 80) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <Container>
            <Link to="/">
                <Img fixed={file.childImageSharp.fixed as FixedObject} />
                <Description>
                    <Name as="h2">Jeremie Rodriguez</Name>
                    <JobTitle as="h3">{dataJson.jobTitle}</JobTitle>
                </Description>
            </Link>
        </Container>
    );
};

NameAndJobComponent.displayName = 'NameAndJob';

export default NameAndJobComponent;

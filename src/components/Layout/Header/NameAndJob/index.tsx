import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../../theme';
import Heading from '../../../widgets/Heading';
import BaseLink from '../../../widgets/Link';

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

const NameAndJobComponent = () => {
    const { dataJson, file } = useStaticQuery<GraphQL.HeaderDataQueryQuery>(graphql`
        query HeaderDataQuery {
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
        <>
            <Link to="/">
                <Img fixed={file.childImageSharp.fixed as FixedObject} />
                <Description>
                    <Heading
                        color={theme.colors.secondary}
                        fontWeight={theme.fonts.main.weight.bold}
                        letterSpacing={-1}
                        margin={0}
                        padding={2}
                        variant="h3"
                        zIndex={1}
                    >
                        Jeremie Rodriguez
                    </Heading>
                    <Heading
                        fontWeight={theme.fonts.main.weight.semiBold}
                        margin={0}
                        marginTop={-2}
                        paddingBottom={2}
                        paddingTop={0}
                        paddingX={2}
                        variant="h4"
                    >
                        {dataJson.jobTitle}
                    </Heading>
                </Description>
            </Link>
        </>
    );
};

NameAndJobComponent.displayName = 'NameAndJob';

export default NameAndJobComponent;

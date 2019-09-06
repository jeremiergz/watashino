import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';
import Flex from '../../../primitives/Flex';
import Heading from '../../../widgets/Heading';
import Link from '../../../widgets/Link';

const NameAndJob = () => {
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
        <Link
            alignItems="center"
            display="flex"
            flexDirection={{ _: 'column', tablet: 'row' }}
            justifyContent={{ _: 'center', tablet: 'flex-start' }}
            textAlign={{ _: 'center', tablet: 'left' }}
            to="/"
        >
            <Img fixed={file.childImageSharp.fixed as FixedObject} />
            <Flex color="text" flexDirection="column" justifyContent="center" marginLeft={{ tablet: 2 }}>
                <Heading
                    color="secondary"
                    fontWeight="bold"
                    letterSpacing={-1}
                    margin={0}
                    padding={2}
                    variant="h3"
                    zIndex={1}
                >
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

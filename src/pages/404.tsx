import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';
import Heading from '../components/widgets/Heading';
import Link from '../components/widgets/Link';

const homeNav = Navigation.links.home;
const notFoundNav = Navigation.links.notFound;

const NotFoundPage = () => (
    <Layout>
        <Layout.Content title={notFoundNav.name} keywords={notFoundNav.keywords}>
            <Heading variant="h4">Man, I hate when this happens...</Heading>
            {'Find you way '}
            <Link to={homeNav.to} underlined>
                Home
            </Link>
        </Layout.Content>
    </Layout>
);

export default NotFoundPage;

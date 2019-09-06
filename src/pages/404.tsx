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
            {'Find your way '}
            <Link to={homeNav.to} variant="underlined">
                Home
            </Link>
        </Layout.Content>
    </Layout>
);

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;

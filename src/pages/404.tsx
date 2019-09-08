import React from 'react';
import Navigation from '../components/Header/Navigation';
import Layout from '../components/Layout';
import Heading from '../components/widgets/Heading';
import Link from '../components/widgets/Link';

const homeNav = Navigation.links.home;
const notFoundNav = Navigation.links.notFound;

const NotFoundPage = () => (
    <Layout>
        <Layout.Content keywords={notFoundNav.keywords} title={notFoundNav.name} type="section">
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

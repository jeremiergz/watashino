import React from 'react';
import Navigation from '../components/Header/Navigation';
import Layout from '../components/Layout';

const homeNav = Navigation.links.home;

const IndexPage = () => (
    <Layout>
        <Layout.Content keywords={homeNav.keywords} title={homeNav.name} type="section"></Layout.Content>
    </Layout>
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;

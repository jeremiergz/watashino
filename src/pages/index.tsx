import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';

const homeNav = Navigation.links.home;

const IndexPage = () => (
    <Layout>
        <Layout.Content title={homeNav.name} keywords={homeNav.keywords}></Layout.Content>
    </Layout>
);

export default IndexPage;

import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';

const articlesNav = Navigation.links.articles;

const ArticlesPage = () => (
    <Layout>
        <Layout.Content title={articlesNav.name} keywords={articlesNav.keywords}></Layout.Content>
    </Layout>
);

export default ArticlesPage;

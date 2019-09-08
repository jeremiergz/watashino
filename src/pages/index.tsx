import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import Navigation from '../components/Header/Navigation';
import Layout from '../components/Layout';

const postsNav = Navigation.links.posts;

const IndexPage = () => {
    useEffect(() => {
        navigate(postsNav.to);
    }, []);
    return (
        <Layout>
            <Layout.Content type="section" />
        </Layout>
    );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;

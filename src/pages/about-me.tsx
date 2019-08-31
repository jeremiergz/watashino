import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';
import LocationMap from '../components/LocationMap';

const aboutMeNav = Navigation.links.aboutMe;

const AboutMePage = () => (
    <Layout>
        <Layout.Content title={aboutMeNav.name} keywords={aboutMeNav.keywords}></Layout.Content>
        <LocationMap />
    </Layout>
);

export default AboutMePage;

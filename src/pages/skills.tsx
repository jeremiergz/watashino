import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import SkillBlock from '../components/common/SkillBlock';
import Layout from '../components/core/Layout';

const SkillsPage = () => {
  const {
    allSkillsJson: { nodes: skills },
    pageData: { keywords, name },
  } = useStaticQuery<GraphQL.SkillsPageDataQuery>(graphql`
    query SkillsPageData {
      allSkillsJson {
        nodes {
          items {
            name
            proficiencyLevel
            sortOrder
          }
          name
          sortOrder
        }
      }
      pageData: navigationJson(page: { eq: "SkillsPage" }) {
        keywords
        name
      }
    }
  `);
  return (
    <Layout>
      <Layout.Content keywords={keywords} title={name} type="section">
        {skills
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(item => (
            <SkillBlock key={item.name} items={item.items as Models.Skill[]} title={item.name} />
          ))}
      </Layout.Content>
    </Layout>
  );
};

SkillsPage.displayName = 'SkillsPage';

export default SkillsPage;

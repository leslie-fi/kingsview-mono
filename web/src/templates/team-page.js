import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "components/shared/graphql-error-list";
import SEO from "components/shared/seo";
import Layout from "containers/layout";
import TeamSection from 'components/team/teamSection'
import PortableText from 'components/shared/portableText'
import GeneralArticle from "../components/blog/general-article";

const TeamPage = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const site = (data || {}).site;
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.teamPage;
  const {teamRoute} = data.teamPage
  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = teamRoute && !teamRoute.useSiteTitle && page.title;
  const gradient = {
    from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  };
  const content = page._rawBody
  return (
    <Layout navMenuItems={menuItems} textWhite={true}>
    <>
    <SEO
      title={pageTitle}
      description={site.description}
      keywords={site.keywords}
      bodyAttr={{
        class: "leading-normal tracking-normal text-white gradient"
      }}
      gradient={gradient}
    />
    <div className="pt-24 mx-auto px-10 items-center">
      <GeneralArticle content={content} title={pageTitle}/>
      {/* <PortableText blocks={content}/> */}
      <TeamSection/>
    </div>
    </>
  </Layout>
  )
};

export const query = graphql`
  query SanityTeamPageTemplateQuery($id: String!) {
    teamPage: sanityTeamPage(id: { eq: $id }) {
      id
      ...TeamInfo
      teamRoute {
        _type
        disallowRobots
        includeInSitemap
        useSiteTitle
        openGraph {
          description
          _type
          _key
          image {
            ...SanityImage
          }
          keywords
        }
      }
      slug {
        current
      }
      _type
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

export default TeamPage;

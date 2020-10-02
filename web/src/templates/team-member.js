import React from "react";
import { graphql } from "gatsby";
import Container from "components/sanity_ui/container";
import GraphQLErrorList from "components/shared/graphql-error-list";
import BlogPost from "components/blog/blog-post";
import SEO from "components/shared/seo";
import Layout from "containers/layout";
import { toPlainText } from "lib/helpers";

export const query = graphql`
  query TeamMemberTemplateQuery($id: String!) {
    teamMember: sanityTeamMember(id: { eq: $id }) {
      slug {
        current
      }
      nmls
      name
      image {
        ...SanityImage
      }
      roles
      id
      email
      _rawBio(resolveReferences: {maxDepth: 10})
    }
  }
`;

const TeamMemberTemplate = (props) => {
  const { data, errors } = props;
  const teamMember = data && data.teamMember;
  return (
    <Layout textWhite={true}>
      {errors && <SEO title="GraphQL Error" />}
      {teamMember && (
        <SEO
          title={teamMember.name || "Untitled"}
          description={toPlainText(teamMember._rawBio)}
          image={teamMember.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <pre>{JSON.stringify(data, null, 4)}</pre>
      {/* {post && <TeamMember {...post} />} */}
    </Layout>
  );
};

export default TeamMemberTemplate;

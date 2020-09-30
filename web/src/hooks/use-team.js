import { useStaticQuery, graphql } from "gatsby";
export const useSiteTeam = () => {
  const { teamMembers } = useStaticQuery(graphql`
    query {
      teamMembers: allSanityTeamMember(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            name
            roles
            email
            slug {
              current
            }
            nmls
            _rawBio
            image {
              ...SanityImage
              alt
              asset {
                fluid(maxWidth: 384) {
                  ...GatsbySanityImageFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return teamMembers;
};

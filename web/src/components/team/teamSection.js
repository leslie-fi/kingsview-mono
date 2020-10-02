import React from "react";
import { mapEdgesToNodes } from "lib/helpers";
import TeamMember, {AltTeamMember} from "./TeamMember";
import Img from "gatsby-image";
import { useSiteTeam } from "hooks/use-team";
// import useFullNav from "hooks/useFullNav";
const TeamSection = () => {
  const TeamList = useSiteTeam();
  const TeamMembers = mapEdgesToNodes(TeamList);
console.log({TeamMembers})
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile
            poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {TeamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
        {/* <AltTeamMember /> */}
    </section>
  );
};

export default TeamSection;

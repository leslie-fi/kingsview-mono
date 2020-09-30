import React from "react";
import { mapEdgesToNodes } from "lib/helpers";
import { useSiteTeam } from "hooks/use-team";
// import useFullNav from "hooks/useFullNav";
export const TeamSection = () => {
  const TeamList = useSiteTeam();
  const TeamMembers = mapEdgesToNodes(TeamList);
console.log({TeamMembers})
return JSON.stringify(TeamMembers, null, 4)
}
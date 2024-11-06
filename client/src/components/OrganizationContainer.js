import React from "react";
import Stack from 'react-bootstrap/Stack';
import OrganizationCard from "./OrganizationCard";

function OrganizationContainer({ user, orgs }) {
  const organizationList = orgs.map((org) => (
    <OrganizationCard key={org.id} org={org} />
  ));

  return (
    <div>
      <Stack className="opp-stack" gap={4}>
        {organizationList}
      </Stack>
    </div>
  );
}

export default OrganizationContainer;

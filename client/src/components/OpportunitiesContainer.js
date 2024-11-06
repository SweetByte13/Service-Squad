import React from "react";
import Stack from 'react-bootstrap/Stack';
import OpportunityCard from "./OpportunityCard";

function OpportunitiesContainer({ user, opps }) {
    const opportunity = opps.map((opportunity) => {
        return (
            <div key={opportunity.id}>
                <OpportunityCard key={opportunity.id} opportunity={opportunity} user={user} />
            </div>
        );
    });

    return (
        <div>
            <Stack className="opp-stack" gap={4}>
                {opportunity}
            </Stack>
        </div>
    );
}
export default OpportunitiesContainer;

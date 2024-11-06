import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import OpportunityCard from "../components/OpportunityCard";
import { useParams } from "react-router-dom";

function Opportunity({ user, setUser }) {
    let { id } = useParams();
    const [opp, setOpp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/opportunities/${id}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((oppsData) => {
                setOpp(oppsData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main className="main-content">
                <h1 className="opp-org-header">Service Opportunity</h1>
                <div>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {opp && <OpportunityCard key={opp.id} opportunity={opp} user={user} />}
                </div>
            </main>
        </div>
    );
}

export default Opportunity;

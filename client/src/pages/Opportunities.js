import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import OpportunitiesContainer from "../components/OpportunitiesContainer";
import OppDropdownFilter from "../components/OppDropdownFilter";

function Opportunities({ user, setUser }) {
    const [opps, setOpps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/opportunities")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((oppsData) => {
                setOpps(oppsData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main className="main-content">
                <h1 className="opp-org-header">Service Opportunities</h1>
                <OppDropdownFilter setOpps={setOpps} opps={opps} />
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <OpportunitiesContainer user={user} setUser={setUser} opps={opps} setOpps={setOpps} />
            </main>
        </div>
    );
}
export default Opportunities;

import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import OrganizationContainer from "../components/OrganizationContainer";

function Organizations({ user, setUser }) {
  const [orgs, setOrgs] = useState([]);
  const [searchOrg, setSearchOrg] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/organizations")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw Error('Network response was not ok.');
      })
      .then((orgsData) => {
        setOrgs(orgsData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const searchedOrgs = orgs.filter((org) => {
    return org.name.toLowerCase().includes(searchOrg.toLowerCase());
  });

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main className="main-content">
        <h1 className="opp-org-header">Organizations</h1>
        <Search setSearchOrg={setSearchOrg} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <OrganizationContainer orgs={searchedOrgs} user={user} />
      </main>
    </>
  );
}

export default Organizations;

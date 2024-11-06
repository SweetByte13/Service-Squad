import React from "react";
import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";

function Profile({ user, setUser }) {
    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main className="main-content">
                <h1 className="profile-header">Your ServiceSquad Profile</h1>
                <strong className="profile-sub-header">Maintain and update your profile below:</strong>
                <ProfileForm setUser={setUser} user={user} />
            </main>
        </div>
    );
}

export default Profile;

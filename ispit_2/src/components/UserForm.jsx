import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ onSubmit }) => {
    const [username, setUsername] =
    useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) =>
setUsername(e.target.value)}
        placeholder="GitHub username"
        />
        <button type="submit">GO!</ button>
        </form>
    );
};

UserForm.propTypes = {
    onSubmit:
PropTypes.func.isRequired,
};

export default UserForm;
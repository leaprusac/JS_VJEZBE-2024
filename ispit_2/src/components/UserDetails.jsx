import React, { Component } from "react";
import PropTypes from "prop-types";

class UserDetails extends Component {
    render() {
        const { user, repos, onReset } =
    this.props;

        if(!user) {
            return null;
        }

        return (
            <div className="user-details">
                <img src={user.avatar_url} alt={`${user.login} avatar`} />
                <h2>{user.name}</h2>
                <p><strong>BIO:</strong>{user.bio}</p>
                <p><strong>LOCATION:</strong>{user.location}</p>
                <h3>REPOSITORIES:</h3>
                <ul>
                    {repos.map((repo) => (
                        <li key={repo.id}>
                            <a href={repo.html_url}
                               target="_blank" rel="noopener
                               noreferrer">
                                    {repo.name}
                               </a>
                        </li>
                    ))}
                </ul>
                <button onClick={onReset}
                >Reset</button>
            </div>
        );
    }
}

UserDetails.propTypes= {
    user: PropTypes.object,
    repos: PropTypes.array,
    onReset: PropTypes.func.isRequired,
};

export default UserDetails;

    
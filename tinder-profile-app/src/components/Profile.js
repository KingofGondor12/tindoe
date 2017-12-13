import React from 'react';

function Profile({ firstName, lastName, profileAvatar}) {
  return (
    <div className="profile">
      <div>
        <img src={ profileAvatar } alt="User Profile Avatar" />
        <p className="name">
          Name: { firstName } { lastName }
        </p>
      </div>
    </div>
  );
}

export default Profile;

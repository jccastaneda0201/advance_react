import { useState } from 'react';

const UserChallenge = () => {
  const [users, setUsers] = useState(null);

  const login = () => {
    setUsers({ name: 'vegan food truck' });
  };
  const logout = () => {
    setUsers(null);
  };

  return (
    <div>
      {users ? (
        <div>
          <h4>hello there, {users.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../slice/store";
import { addUserAsync, fetchUserAsync } from "../slice/userSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const [newUser, setNewUser] = useState({ name: "", email: "" });
   
  //Fetch users when component mounts
  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  const handleUser = () => {
    if (!newUser.name || !newUser.email) return;
    dispatch(addUserAsync(newUser));
    setNewUser({ name: "", email: "" });
  };

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading . . .</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {users.map((user) => (
            <li key={user.id}>
              {user.id} {user.name} {user.email}
            </li>
        ))}
      </ul>
      <div>
      <input
          type="text"
          placeholder="User name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleUser} >Add User</button>
      </div>
    </div>
  );
};

export default UserList;

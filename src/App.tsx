import React, { useEffect } from "react";
import "./App.css";
import { PostContainer } from "./components/PostContainer";
import { PostContainer2 } from "./components/PostContainer2";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  console.log("Render APP");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        {users.map(user => (
          <div key={user.id}>
            {user.id} {user.name} {user.email}
          </div>
        ))}
      </div>
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;

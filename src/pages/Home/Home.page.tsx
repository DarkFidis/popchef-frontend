import React from "react";
import {UserContainer} from "../../containers/UserContainer/UserContainer.component";

export const Home: React.FC = () => {
  return (
    <>
      <div>Bienvenue sur une app React !</div>
      <UserContainer />
    </>
  )
}

export default Home

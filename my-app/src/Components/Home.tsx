import { useContext } from "react";
import DataContext from "../Context/DataContext";

const Home = () => {
  const { user } = useContext(DataContext);
  return (
    <div>
      <h2>HOME</h2>
      <h2>{user}</h2>
    </div>
  );
};

export default Home;

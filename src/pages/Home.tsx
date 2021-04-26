import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// constants
import { PAGE_TITLE_HOME } from "../utils/constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE_HOME}</title>
      </Helmet>
      <div>
        ...HOME <br />
        <Link to="/play">Start a new game</Link>
      </div>
    </>
  );
};

export default Home;

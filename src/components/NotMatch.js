import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <p>
        <Link to="/employees"> Goto Home</Link>
      </p>
    </div>
  );
}

export default NoMatch;

import React from "react";
import { Link } from "react-router-dom";
class Nothing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="emotion">
          <h2>Nothing to lose.</h2>
        </div>
        <div>
          <Link to="/happy">
            <h2>Happy</h2>
          </Link>
        </div>
        <div>
          <Link to="/lazy">
            <h2>Lazy</h2>
          </Link>
        </div>
        <div>
          <Link to="/smile">
            <h2>Smile</h2>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h2>Nothing</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nothing;

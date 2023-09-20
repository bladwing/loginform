import { Link } from "react-router-dom";

const DemotText = () => {
  return (
    <div className="col-xl-6">
      <div className="card-body p-md-5">
        <h1>Terms and Policy</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat
          totam culpa minus, ea labore amet ab iusto nesciunt! Libero voluptate
          eaque deleniti omnis esse impedit, non earum recusandae cupiditate.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat
          totam culpa minus, ea labore amet ab iusto nesciunt! Libero voluptate
          eaque deleniti omnis esse impedit, non earum recusandae cupiditate.
        </p>
      </div>

      <Link to="/" className="btn btn-dark btn-lg btn-block ms-4">
        BACK{" "}
      </Link>
    </div>
  );
};

export default DemotText;

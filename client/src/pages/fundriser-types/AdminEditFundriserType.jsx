import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Forbiden } from "../../components/error/Forbiden";
import { Title } from "../Title";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export function AdminEditFundriserType() {
  const { fundriserType } = useParams();
  const navigate = useNavigate();
  const { role, editFundriserType } = useContext(GlobalContext);
  const [ text, setText ] = useState(fundriserType);

  if (role !== "admin") {
    return <Forbiden />
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!text) {
      return;
    }

    fetch("http://localhost:3001/api/fundriser-types/" + fundriserType, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ newTitle: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          editFundriserType(fundriserType, text)
          navigate("/fundriser-types");
        }
      })
      .catch(console.error)
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Title title="Readaguoti fondo tipa" />
        </div>
        <div>
          <form
            onSubmit={submitHandler}
            className="col-12 col-sm-8 col-md-6 col-lg-4"
          >
            <div className="mb-3">
              <label className="form-label" htmlFor="fundriserType">
                Fondo tipas
              </label>
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
                className="form-control"
                id="fundriserType"
              />
            </div>
            <button className="btn btn-primary py-2 me-2" type="submit">
              Atnaujinti
            </button>
            <Link to="/fundriser-types" className="btn btn btn-outline-secondary py-2" type="submit">
              Atšaukti
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

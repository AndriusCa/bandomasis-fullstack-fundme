import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function UsersTable() {
  const { fundriserTypes, deleteFundriserType } = useContext(GlobalContext);

  function deleteFundriserTypeHandler(title) {
    fetch("http://localhost:3001/api/fundriser-types/" + title, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") {
          deleteFundriserType(title);
        }
      })
      .catch(console.error)
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fundriser tipas</th>
            <th className="text-end" scope="col">
              Veiksmas
            </th>
          </tr>
        </thead>
        <tbody>
          {fundriserTypes.map((fundriserType, index) => (
            <tr key={fundriserType}>
              <td>{index + 1}</td>
              <td>{fundriserType}</td>
              <td className="d-flex gap-2 justify-content-end">
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/fundriser-types/${fundriserType}/edit`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteFundriserTypeHandler(fundriserType)}
                  className="btn btn-danger btn-sm"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

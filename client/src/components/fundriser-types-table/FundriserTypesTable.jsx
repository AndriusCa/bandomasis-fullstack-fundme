import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function FundriserTypesTable() {
  const { fundriserTypes, deleteFundriserType } = useContext(GlobalContext);

  /*
GET: http/api/car-types                                                         ['type1', 'type2', 'type3']
GET: http/api/car-types/pavadinimas                                             {title: type1, size: 5, color: red}
DELETE: http/api/car-types/pavadinimas
POST: http/api/car-types + {title: type1, size: 5, color: red}
PUT:  http/api/car-types/pavadinimas + {title: type1, size: 5, color: red}
*/

  function deleteFundriserTypeHandler(title) {
    fetch("http://localhost:3001/api/fundriser-types/" + title, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          deleteFundriserType(title)
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
            <th scope="col">Fondo tipas</th>
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
                  Redaguoti
                </Link>
                <button
                  onClick={() => deleteFundriserTypeHandler(fundriserType)}
                  className="btn btn-danger btn-sm"
                  type="button"
                >
                  Ištrinti
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

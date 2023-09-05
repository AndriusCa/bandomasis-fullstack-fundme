import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Finansuoti</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Švietimas
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Labdara
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Bendruomenė
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Šeima
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Sportas
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Apie</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Apie mus
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Kontaktai
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Taisyklės ir sąlygos
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Privatumo politika
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  DUK
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Užsiprenumeruokite mūsų naujienlaiškį</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Jūsų el. pašto adresas"
                />
                <button className="btn btn-primary" type="button">
                  Prenumeruoti
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>Visos teisės saugomos © 2023</p>
        </div>
      </footer>
    </div>
  )
}

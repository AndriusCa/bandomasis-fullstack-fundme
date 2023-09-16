import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from "./context/GlobalContext";
import { PublicLayout } from "./layout/PublicLayout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Page404 } from "./pages/Page404";
import { UserLayout } from "./layout/UserLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AdminFundriserTypes } from "./pages/fundriser-types/AdminFundriserTypes";
import { AdminNewFundriserType } from "./pages/fundriser-types/AdminNewFundriserType";
import { AdminEditFundriserType } from "./pages/fundriser-types/AdminEditFundriserType";
import { Users } from "./pages/users/Users";

function App() {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route Component={UserLayout}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route
              path="/fundriser-types"
              element={<AdminFundriserTypes />}
            ></Route>
            <Route
              path="/fundriser-types/new"
              element={<AdminNewFundriserType />}
            ></Route>
            <Route
              path="/fundriser-types/:fundriserType/edit"
              element={<AdminEditFundriserType />}
            ></Route>
            <Route path="/users" element={<Users />}></Route>
          </Route>
          <Route Component={PublicLayout}>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  )
}

export default App;

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Forbiden } from "../../components/error/Forbiden";
import { FundriserTypesTable } from "../../components/fundriser-types-table/FundriserTypesTable";
import { Title } from "../Title";

export function AdminFundriserTypes() {

  const { role } = useContext(GlobalContext);

    if (role !== "admin") {
      return <Forbiden />;
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Title title="Fundriser tipai" uri="/fundriser-types/new" />
        </div>
        <div className="col-12"><FundriserTypesTable /></div>
      </div>
    </div>
  )
}
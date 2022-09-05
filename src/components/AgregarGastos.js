import { useContext } from "react";
import GastosContext from "../context/usecontext";

function AgregarGasto() {

const { agregarGasto } = useContext(GastosContext);

  function handleSubmit(e) {
    e.preventDefault();
    const gasto = e.target.elements.gasto.value;
    agregarGasto(gasto);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input autoComplete="off" type="number" id="gasto" />
        <button type="Submit"> Agregar gasto </button>
      </form>
    </>
  )
}

export default AgregarGasto;
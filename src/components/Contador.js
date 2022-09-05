import { useContext } from "react";
import GastosContext from "../context/usecontext";

function Contador() {
  const { gastos } = useContext(GastosContext);

  let total = 0;
  for (let i = 0; i < gastos.length; i++){
    total += Number(gastos[i])
  }
  return <div> Gasto mensual: ({parseInt(total)}  )</div>;
}

export default Contador;
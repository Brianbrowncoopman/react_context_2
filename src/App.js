import React, { useState } from "react";
import Contador from "./components/Contador";
import GastosMes from "./components/GastosMes";
import AgregarGasto from "./components/AgregarGastos";
import GastosContext from "./context/usecontext";



function App() {
  
  const [gastos, actualizarGastos] = useState([]);

  function agregarGasto(gasto) {
    actualizarGastos([...gastos,gasto])
  }

  return (
    <GastosContext.Provider value={{
      gastos, 
      agregarGasto
    }}>
      
      <h1>Contador de gastos</h1>
      <h2>Uso de UseContext</h2>
      <Contador />
      <AgregarGasto />
      <GastosMes />
    </GastosContext.Provider>
  );
}


export default App;

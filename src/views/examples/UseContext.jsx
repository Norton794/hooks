import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {
  const context = useContext(DataContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <div className="center">
        <span className="text">{context.text}</span>
        <span className="text">{context.number}</span>
      </div>
    </div>
  );
};

export default UseContext;

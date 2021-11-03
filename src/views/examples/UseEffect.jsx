import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

function calcFatorial(n) {
    const num = parseInt(n);
  if (num < 0) {
    return -1;
  }
  
  if (num === 0) {
    return 1;
  }

  return calcFatorial(num - 1) * num;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number))
    //   return () => {
    //       cleanup
    //   }
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;

import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
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

function oddOrEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  const [number2, setNumber2] = useState(1);
  const [even, setEven] = useState(false);

  useEffect(() => {
    setFatorial(calcFatorial(number));
    //   return () => {
    //       cleanup
    //   }
  }, [number]);

  useEffect(() => {
    setEven(oddOrEven(number2));
    //   return () => {
    //       cleanup
    //   }
  }, [number2]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">Odd or Even:</span>
          <span className="text red">{even === true ? "Even" : "odd"}</span>
        </div>

        <input
          type="number"
          className="input"
          min="0"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;

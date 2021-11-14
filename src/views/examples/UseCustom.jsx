import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
const UseCustom = (props) => {
  const URL = 'http://files.cod3r.com.br/curso-react/estados.json'

  const response = useFetch(URL);

  function showStates(states) {
    return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
  }

  //fetch('http://files.cod3r.com.br/curso-react/estados.json').then(resp => resp.json()).then(json=>console.log(json))
  const [count, inc, dec] = useCounter()
  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <SectionTitle title="Exercicio 1" />
      <div className="center">

        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>Inc</button>
          <button className="btn" onClick={() => dec()}>dec</button>
        </div>
      </div>



      <SectionTitle title="Exercicio 2" />
      <div className="center">
        <ul>{!response.loading ? showStates(response.data) : <h2>Loading...</h2>}</ul>

      </div>
    </div>
  );
};

export default UseCustom;

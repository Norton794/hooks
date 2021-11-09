import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };

    case "login":
      return { ...state, user: { name: "Norton" } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, exec] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>

        <button className="btn" onClick={() => exec({ type: "login" })}>
          Logar
        </button>

        <button className="btn" onClick={() => exec({ type: "numberAdd2" })}>
          +2
        </button>
      </div>
    </div>
  );
};

export default UseReducer;

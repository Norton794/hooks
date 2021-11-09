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
      return { ...state, number: +state.number + 2 };

    case "login":
      return { ...state, user: { name: action.payload } };

    case "mult7":
      return { ...state, number: +state.number * 7 };
    case "div25":
      return { ...state, number: +state.number / 25 };

    case "parse":
      return { ...state, number: parseInt(state.number) };
    case "addN":
      return { ...state, number: action.payload };

    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

        <span className="text">Logar</span>
        <input
          className="btn"
          value={state.number}
          onChange={(e) => dispatch({ type: "login", payload: e.target.value })}
        />

        <button
          className="btn"
          onClick={() => dispatch({ type: "numberAdd2" })}
        >
          +2
        </button>

        <button className="btn" onClick={() => dispatch({ type: "mult7" })}>
          x7
        </button>

        <button className="btn" onClick={() => dispatch({ type: "div25" })}>
          /25
        </button>

        <button className="btn" onClick={() => dispatch({ type: "parse" })}>
          parseInt
        </button>

        <input
          type="number"
          className="btn"
          value={state.number}
          onChange={(e) => dispatch({ type: "addN", payload: e.target.value })}
        />
      </div>
    </div>
  );
};

export default UseReducer;

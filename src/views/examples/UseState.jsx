import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const UseState = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={()=>setCount(current => current - 1)} className="btn">-1</button>
                    <button onClick={()=>setCount(current => current + 1)} className="btn">+1</button>
                </div>

            </div>
            <SectionTitle title="Exercicio #2" />
        </div>
    )
}

export default UseState

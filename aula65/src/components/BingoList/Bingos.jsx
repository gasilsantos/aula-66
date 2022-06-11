import React from "react";

export default function Bingos(props){
    
    console.log("RENDERIZAÇÃO DO COMPONENTE FILHO")

    return(
        <div>
            <h4>Lista de números do bingo</h4>
            {
                props.bingos.map(
                    (bingo, index) => {
                        return(
                            <p key={index}>
                                {bingo}
                            </p>
                        )
                    }
                )
            }
            <button
                onClick={props.addBingo}
            >
                sortear numero
            </button>
        </div>
    )

}
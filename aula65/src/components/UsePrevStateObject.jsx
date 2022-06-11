import React, { useState } from "react";

export default function UsePrevStateObject() {

    const [user, setUser] = useState(

        {
            name: 'mangina',
            age: 22,
            job: 'administrador de redes'
        }
    )

    return (
        <div>
            <h4>Hook useState() com preState em objeto</h4>
            <button
                //</div> onClick={
                //  ()=> setUser({job:'Sys Admin'})
                // }
                onClick={
                    () => {
                        setUser(
                            (prevState) => {
                                return { ...prevState, job: 'Sys Admin' }
                            }
                        )
                    }
                }
            >
                Alterar profissão
            </button>
            <p>
                {JSON.stringify(user)}
            </p>

        </div>
    )
}
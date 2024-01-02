import React from 'react'


/*this class now creates an example of the use case of the searched word after the meaning is found
if course we still using the all variable data as a prop*/
const Example = ({all}) => {
  return (
    <>
    {all.map((Val)=>{
        return Val.meanings.map((Means)=>{
            return Means.definitions.map((Def)=>{
                return (
                    <>
                    {Def.example ? (
                        <li className='text-capitalize fs-5 text-start px-3'>
                            {Def.example}
                        </li>
                    ):(
                        ""
                    )}
                    </>
                )
            })
        })
    })}
    </>
  )
}

export default Example
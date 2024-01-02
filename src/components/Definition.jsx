import React from 'react';


/*this class contains the definition's component where we map through the API's arrays
to get the definition of words and display them*/

//step 1 : importing all variables which has the api data as a prop 
const Definition = ({ all }) => {
    return (
        //step 2 : map through the array to get the meanings array to search for the searched  word
        <>
        {all.map((Val) => {
            return Val.meanings.map((Means) => {
                return Means.definitions.map((Def) => {
                    /*step 3 : here we have gotten through the array and gotten the word and now we are mapping to extract 
                    the definition */
                    return (
                        <>
                            <li className='text-capitalize fs-5 text-start' >
                                {Def.definition}
                            </li>
                            <hr />
                        </>
                    );
                });
            });
        })}
        </>
    );
};

export default Definition;
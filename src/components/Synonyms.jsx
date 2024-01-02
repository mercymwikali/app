import React from 'react'


/*this class now creates Synonyms of the use case of the searched word after the meaning is found
if course we still using the all variable data as a prop*/
const Synonyms = ({ all }) => {
    return (
        <>
            {all.map((Val) => {
                return Val.meanings.map((Means) => {
                    return Means.definitions.map((Def) => {
                        return Def.synonyms.map((Syn) => {
                            return (
                                <>
                                    <li className='text-capitalize fs-5 mx-4 my-2'>
                                        {Syn}
                                    </li>
                                </>
                            );
                        });
                    });
                });
            })}
        </>
    );
};

export default Synonyms;
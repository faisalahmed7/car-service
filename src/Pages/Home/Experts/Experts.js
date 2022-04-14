import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';





const experts = [
    { id: 1, name: 'Ronaldo', img: expert1 },
    { id: 2, name: 'Messi', img: expert2 },
    { id: 3, name: 'Neymar', img: expert3 },
    { id: 4, name: 'Marcelo', img: expert4 },
    { id: 5, name: 'Kross', img: expert5 },
    { id: 6, name: 'Casemero', img: expert6 },
]
const Experts = () => {
    return (
        <div className='container '>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}>

                    </Expert>)
                }
            </div>


        </div>
    );
};

export default Experts;
import React from 'react'
import './LandingPage.css'
import hom1 from '../Images/hom1.png'
import hom2 from '../Images/hom2.jpg'
import hom3 from '../Images/hom3.png'

function LandingPage() {
    return (
        <div>
            <div className='landingpage-back-img'>
                <div className='row'>
                    <div className='col mt-5 pt-5 ms-5 ps-5'>
                        <h2 className='mt-5 ms-5'>
                            "I have always imagined that Paradise<br></br>
                            will be kind of a Library"
                        </h2>
                    </div>
                    <div className='col mt-5 pt-5 ms-5 ps-5'>
                        <div className='mt-5 pt-3'>
                            <h2 className='mt-5 pt-5 '>
                                "The only thing that you absolutely have <br></br>
                                to know, is thelocation of the Library"
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col mt-5'>
                        <h2>
                            "nothing is pleasanter than<br></br>
                            exploring a Library"
                        </h2>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
            <div>
                <img src={hom2} className='landingpage-back-img' />
            </div>
        </div>
    )
}

export default LandingPage

import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = ({ header, subHeader }) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const headerArray = header.split("");
    const subHeaderArray = subHeader.split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <div className="page-headers">
            <section className="border-wrapper">
                <div className="border"></div>
            </section>

            <div className="headers">

                <div className="header-image">
                    <div className="moon">
                        <div className="moon-image"></div>
                    </div>
                    <div className="clouds">
                        <img className="cloud-image1" src={require('../assets/images/cloud4-removebg-preview.png')} />
                        <img className="cloud-image2" src={require('../assets/images/cloud-removebg-preview.png')} />
                        <img className="cloud-image3" src={require('../assets/images/cloud4-removebg-preview.png')} />
                    </div>
                </div>

                <div className="header-text">
                    <h1 className="title">
                        <span>
                            {
                                headerArray.map((char, i) => (
                                    <span key={char + i} className={`${letterClass} _${i + 5}`}>
                                        {char}
                                    </span>
                                ))
                            }
                        </span>
                    </h1>
                    <h3 className="subTitle">
                        <span>
                            {
                                subHeaderArray.map((char, i) => (
                                    <span key={char + i} className={`${letterClass} _${i + 9}`}>
                                        {char}
                                    </span>
                                ))
                            }
                        </span>
                    </h3>

                </div>
            </div>

            <section className="border-wrapper">
                <div className="border"></div>
            </section>
        </div>
    )
}

export default Header;
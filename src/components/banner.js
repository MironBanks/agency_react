import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>We believes in perfection by</span>
                        </div>
                        <div className="line">
                            <span>design and performance by default.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <NavLink to="/about-us" exact>
                            More about us
                            <RightArrow />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
import React from 'react';
import { NavLink } from 'react-router-dom'


const caseStudies = [
    {
        id: 1,
        subtitle: 'UI/UX Design',
        title: "A custom formula for your skin's unique needs",
        img: 'website_3',
        href: "/about-us"
    },
    {
        id: 2,
        subtitle: 'Web development',
        title: "Open space floor plans for you next venture",
        img: 'webDev_05',
        href: "/case-studies"
    },
    {
        id: 3,
        subtitle: 'Brand Identities / Strategy',
        title: "For your best look ever",
        img: 'product_3',
        href: "/case-studies"
    }
]




const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">

                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <NavLink to={caseItem.href} exact>
                            <div className="case" key={caseItem.id}>
                                <div className="case-details">
                                    <span>{caseItem.subtitle}</span>
                                    <h2>{caseItem.title}</h2>
                                </div>
                                <div className="case-image">
                                    <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.title} />
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;
import React from 'react'
import { hero, hero_container } from './Hero.module.css';

export default function Hero() {
    return (
        <section className={hero_container}>
            <div className={hero}>
                <p>
                    <span>Computational Design & Visualization Lab.</span>
                    <br />is a research laboratory of the Cognitive and Media Systems Group (CMS)
                    of the Centre of Informatics and Systems of the University Of Coimbra
                </p>
            </div>
        </section>
    )
}

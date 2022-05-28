import React from 'react'
import { hero } from './Hero.module.css';

export default function Hero() {
    return (
        <section className={hero}>
            <p>
                <span>Computational Design & Visualization Lab.</span>
                <br />is a research laboratory of the Cognitive and Media Systems Group (CMS)
                of the Centre of Informatics and Systems of the University Of Coimbra
            </p>
        </section>
    )
}

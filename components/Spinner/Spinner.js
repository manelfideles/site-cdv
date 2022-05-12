import React from 'react'

import { spinner, spinner_container } from './Spinner.module.css';

export default function Spinner() {
    return (
        <div className={spinner_container}>
            <svg className={spinner} viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        </div>
    )
}

import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options /*handleGood, handleNeutral, handleBad*/}) {
    return (
        <div>
            <button
                type="button"
                className={styles.btn}
                name='good'
                onClick={() => { options('good') }}>
                Good
            </button>

            <button
                type="button"
                className={styles.btn}
                name='neutral'
                onClick={() => { options('neutral') }}>
                Neutral
            </button>

            <button
                type="button"
                className={styles.btn}
                name='bad'
                onClick={() => options('bad')}>
                Bad
            </button>
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: propTypes.func.isRequired
};

export default FeedbackOptions;
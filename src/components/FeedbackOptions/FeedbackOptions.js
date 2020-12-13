import React from 'react';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({handleGood, handleNeutral, handleBad}) {
    return (
        <div>
            <button type="button"
                className={styles.btn}
                onClick={handleGood}>
                Good 
            </button>

            <button type="button"
                className={styles.btn}
                onClick={handleNeutral}>
                Neutral 
            </button>

            <button type="button"
                className={styles.btn}
                onClick={handleBad}>
                Bad 
            </button>
        </div>
    )

};

export default FeedbackOptions;
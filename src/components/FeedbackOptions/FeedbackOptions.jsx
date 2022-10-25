import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
          <div className={css.feedbackList}>
        {options.map((element)=>{
            return <button type='button' key={element+'id'} onClick={()=>onLeaveFeedback(element)} className={css.feedbackItem}>{element}</button>
        })}
             
             {/* <button type='button' onClick={this.handleButtonNeutral} className={css.feedbackItem}>NEUTRAL</button>
             <button type='button' onClick={this.handleButtonBad} className={css.feedbackItem}>BAD</button> */}
         </div>
        </>
    )
}

export default FeedbackOptions;
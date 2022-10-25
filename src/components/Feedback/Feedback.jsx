// import {Component} from "react";
// import css from './Feedback.module.css';

// class Feedback extends Component {
//     // state = {
//     //     good: 0,
//     //     neutral: 0,
//     //     bad: 0
//     //   }

//     //   handleButtonGood = () => {
//     //     this.setState((prev)=>({
//     //         good: prev.good + 1 
//     //     }))
//     //   }

//     //   handleButtonNeutral = () => {
//     //     this.setState((prev)=>({
//     //         neutral: prev.neutral + 1 
//     //     }))
//     //   }

//     //   handleButtonBad = () => {
//     //     this.setState((prev)=>({
//     //         bad: prev.bad + 1 
//     //     }))
//     //   }

//     //   countTotalFeedback = () => {
//     //     const {good, bad, neutral} = this.state;
//     //      return good + bad + neutral; 
//     //   }
      
//     //   countPositiveFeedbackPercentage = () => {
//     //     const {good, bad, neutral} = this.state;
//     //     const totalFeedback = good + bad + neutral;
//     //     if(good===0) {
//     //         return 0;
//     //     }
//     //     return Math.round(good * 100 / totalFeedback);
//     //   }
//       render() {
//     //   const total = this.countTotalFeedback();
//     //   const totalGood = this.countPositiveFeedbackPercentage();
//       return (
//         <div className={css.feedback}>
//               <h2 className={css.feedbackTitle}>Please leave feedback</h2>
//         <div className={css.feedbackList}>
//             <button type='button' onClick={this.handleButtonGood} className={css.feedbackItem}>GOOD</button>
//             <button type='button' onClick={this.handleButtonNeutral} className={css.feedbackItem}>NEUTRAL</button>
//             <button type='button' onClick={this.handleButtonBad} className={css.feedbackItem}>BAD</button>
//         </div>
//         {/* <h2 className={css.feedbackTitle}>Statistics</h2>
//         <ul className={css.statisticList}>
//             <li className={css.statisticItem}>GOOD: <span>{this.state.good}</span></li>
//             <li className={css.statisticItem}>NEUTRAL: <span>{this.state.neutral}</span></li>
//             <li className={css.statisticItem}>BAD: <span>{this.state.bad}</span></li>
//             <li className={css.statisticItem}>Total: <span>{total}</span></li>
//             <li className={css.statisticItem}>Positive feedback: <span>{totalGood}%</span></li>
//         </ul> */}
//         </div>
//       );
//       }
// }

// // export default Feedback;
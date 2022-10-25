import React from 'react';
import {Component} from "react";
//import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleButtonFeedback = event => {
    this.setState((prev)=>{
       return {[event]: prev[event]+1}
    })
  }

  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state;
     return good + bad + neutral; 
  }
  
  countPositiveFeedbackPercentage = () => {
    const {good, bad, neutral} = this.state;
    const totalFeedback = good + bad + neutral;
    if(good===0) {
        return 0;
    }
    return Math.round(good * 100 / totalFeedback);
  }
  render() {
    const {good, bad, neutral} = this.state;
    const total = this.countTotalFeedback();
    const totalGood = this.countPositiveFeedbackPercentage();
    return (
     <>
     <FeedbackOptions
    options={Object.keys(this.state)}
    onLeaveFeedback={this.handleButtonFeedback}
    />
    <Statistics
    good={good}
    bad={bad}
    neutral={neutral}
    total={total}
    positivePercentage={totalGood}/> 
    </>
   
  )
  }
};

export default App;

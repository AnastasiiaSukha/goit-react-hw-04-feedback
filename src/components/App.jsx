
import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Section";
import Notification from "./Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] +1,
    }
    
    })
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total

  }
   

  countPositiveFeedbackPercentage = () => {

   return Math.round((this.state.good / this.countTotalFeedback()) * 100)
    
  }

   options = Object.keys(this.state);

  render() {

    const { good, neutral, bad } = this.state;
    
    return (
      <div>
       <Section title = "Please leave Feedback">
           <FeedbackOptions
             options={this.options}
             onLeaveFeedback = {this.onLeaveFeedback}
         />
        </Section>
        {!this.countTotalFeedback() ? (<Notification message="There is no feedback" />) : (
                     <Section title = "Statistics">
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
               total={this.countTotalFeedback()}
               percentage ={this.countPositiveFeedbackPercentage()}
             />
        </Section>
        )}

        </div>)
                
  }
  
}


  

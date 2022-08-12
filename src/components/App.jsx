
import React from "react";
import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Section";
import Notification from "./Notification/Notification";

export function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);





  const onFeedbackClick = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
      
    }
    
  }
  
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total

  }
   

  const countPositiveFeedbackPercentage = () => {

   return Math.round((good / countTotalFeedback()) * 100)
    
  }



    
    return (
      <div>
       <Section title = "Please leave Feedback">
           <FeedbackOptions
            options={{ good,neutral,bad }}
             onLeaveFeedback = {onFeedbackClick}
         />
        </Section>
        {!countTotalFeedback() ? (<Notification message="There is no feedback" />) : (
                     <Section title = "Statistics">
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
               total={countTotalFeedback()}
               percentage ={countPositiveFeedbackPercentage()}
             />
        </Section>
        )}

        </div>)
                
  
}


  

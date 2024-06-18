
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // to display the total number 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  };

  // To display the percentage of positive reviews
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    // if total is greater than 0, return the positive percentage, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  // update the state when a button is clicked
  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  // handleAddition = () => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     count: prevState.count + 1,
  //   }));
  // };

  // handleSubtraction = () => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     count: prevState.count - 1,
  //   }));
  // };
  render() {
    const { good, neutral, bad,} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        {/* <div>
          <p>Count: {count}</p>
          <button onClick={this.handleAddition}>Add 1</button>
          <button onClick={this.handleSubtraction}>Minus 1</button>
        </div> */}

        {/* <div>
        {options.map(option => (
           <button key={option} onClick={ () => this.handleClick(option)}>{option}</button>
        ))}
        </div> */}
        
       
        {/* final app code down here */}

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"  />  
          )}
        </Section>
      </div>
    );
  } 
}


// class component
// export class App extends Component {
//   handleClick = () => {
//     console.log('Isa Pa owen Click mo pa!');
//   };
//   handleClickTest = name => {
//     console.log(`Hello! Im Clicked by ${name}`);
//   };

//   handleClick3 = () => {
//     console.log('pangalawa na owen!, isa pa!');
//   };
//   handleClick4 = name => {
//     console.log(`Im being click again by${name}`);
//   };


//   render() {
//     return (
//       <>
//         <button onClick={ this.handleClick}>Click Me</button>
//         <button onClick={ () => this.handleClickTest('owen')}>Click Me</button>
//         <button onClick={ this.handleClick3}>Click Me</button>
//         <button onClick={ () => this.handleClick4('by my self')}>Click Me</button>
     
//       </>
//     );
//   };
// };


// functonal components
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template | hw2 feedback
//     </div>
//   );
// };


import React, {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section';
import Notifications from './Notifications';

class App extends Component {
    static defaultProps = {
        step: 1
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const result = Math.round((good * 100) / this.countTotalFeedback()).toFixed(0);
        return result;
    };

    handleFeedback = name => {
        this.setState(prevState => ({
            [name]: prevState[name] + this.props.step
        }));
    };

    // handleGood = () => {
    //     this.setState((prevState, props) => {
    //         return {good: prevState.good + props.step}
    //     })
    // };

    // handleNeutral = () => {
    //     this.setState((prevState, props) => {
    //         return {neutral: prevState.neutral + props.step}
    //     })
    // };

    // handleBad = () => {
    //     this.setState((prevState, props) => {
    //         return {bad: prevState.bad + props.step}
    //     })
    // };

    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.handleFeedback}
                        // handleGood={this.handleGood}
                        // handleNeutral={this.handleNeutral}
                        // handleBad={this.handleBad}
                    />
                </Section>
                {this.countTotalFeedback() > 0 ? (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    </Section>
                    ) : (
                    <Notifications message="No feedback given"/>  
                )}
            </div>
        )
    }
}

export default App;
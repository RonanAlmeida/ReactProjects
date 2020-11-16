import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";

class QuizBee extends Component {
  state = {
    questionBank: [],
  };

  getQuestions = () => {
    quizService().then((question) => this.setState({ questionBank: question }));
  };

  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(({ ques, ans, correct, questionId }) => <h4>{ques}</h4> )}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));

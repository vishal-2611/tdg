import React, { Component } from 'react'
import './style.css';
import { connect } from 'react-redux'
export class Question extends Component {
    constructor() {
        super();
        this.state = {
            question: ["What you're good at?", "What you love?", "What the world needs?", "What you can be paid for?"],
            allAnswer: [],
            questionState: 0,
            answers: ""
        }
    }
    currentQuestion = (value) => {
        let currentValue = this.state.questionState;
        if (currentValue <= 0 && value === -1) {
            return;
        } else if (currentValue >= 3 && value === 1) {
            this.props.history.push('/ikigai');
        }
        else {
            this.setState({ questionState: currentValue + value }, () => {
                console.log(this.state.questionState)
            })
        }

    }
    handleAnswer = (event) => {
        //console.log(event.target.value)
        event.preventDefault();
        this.setState({ answers: event.target.value });


    }

    addAnswer = () => {
        if (this.state.answers === "" || this.state.answers === null) {
            return;
        } else {
            let index = this.props.userId.length;
            console.log('trigger', this.state.answers);
            let obj = {};
            obj['userid'] = this.props.userId[index - 1].userId;
            obj['question'] = this.state.question[this.state.questionState];
            obj['answer'] = this.state.answers;
            this.props.addAnswers(obj);
            this.setState({ answers: '' })
        }
    }
    render() {
        let state = this.state;
        console.log('redux state =>',this.props.allAnswer);
        let index = this.props.userId.length;
        let currentUser = this.props.userId[index - 1].userId;
        console.log(currentUser)
        return (
            <React.Fragment>
                <div className="container question">
                    <div className="row">
                        <h2 className="prompt">{state.question[state.questionState]}</h2>
                    </div>
                    <div className="row">
                        <form className="input" onSubmit={(event) => event.preventDefault()}>
                            <input type="text" value={this.state.answers} className="form-control" onChange={this.handleAnswer} />
                        </form>
                        <button type="button" name="button" className="add-button" id="add" onClick={() => this.addAnswer()}>
                            <i className={"fas fa-plus"}></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="responses" id="responses">
                            <ul>
                                {this.props.allAnswer.map((item, index) =>
                                     item.userid === currentUser ?
                                    state.question[state.questionState] === item.question ?
                                        <li key={index}>{item.answer}</li> :
                                        null :null
                                )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:250}}>
                        <button type="button" name="button" className={"btn btn-primary back-button"} onClick={() => this.currentQuestion(-1)}>
                            <i className={"fas fa-arrow-left"}></i>
                        </button>
                        <button type="button" name="button" className={"btn btn-primary next-button"} onClick={() => this.currentQuestion(1)}>
                            <i className={"fas fa-arrow-right"}></i>
                        </button>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    allAnswer: state.UserAnswers.answers,
    userId: state.UserId.userId
})

const mapDispatchToProps = dispatch => {
    return {
        addAnswers: (payload) => dispatch({ type: 'SET_USER_ANSWERS', payload }),
        setUserId: (payload) => dispatch({ type: 'SET_USER_ID', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);

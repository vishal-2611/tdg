import React from 'react'
import { connect } from 'react-redux'
export class Users extends React.Component {
    render() {
        console.log(this.props.allAnswer)
        return (
            <React.Fragment>
                    <div>
                        <table  className="table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Question</th>
                                    <th>Answers</th>
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                this.props.allAnswer.map((item,index)=>
                                    <tr key={index}>
                                        <td>{item.userid}</td>
                                        <td>{item.question}</td>
                                        <td>{item.answer}</td>
                                    </tr>
                                )
                                }
                                </tbody>
                        </table>
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
                    addAnswers: (payload) => dispatch({type: 'SET_USER_ANSWERS', payload }),
        setUserId: (payload) => dispatch({type: 'SET_USER_ID', payload })
            }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(Users);

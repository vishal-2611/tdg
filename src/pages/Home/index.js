import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
export class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            username : '',
        }
    }
    componentDidMount(){
        console.log(this.props.userId)
        
    }
    getUserName = (event) =>{
        console.log(event.target.value)
        this.setState({username : event.target.value})
    }

    handleSubmit= (event) =>{
        if(this.state.username.length > 0 ){
        this.props.setUserId(this.state.username);
        this.props.history.push('/question')
        event.preventDefault();
    } else {
            return;
        }
    }

    render() {
        /* if(this.props.userId.length > 0){
            return <Redirect to="/question" />;
        } */
        return (
            <div className={'container'} style={{display: 'flex' ,justifyContent:'center',alignItems:'center',marginTop:30}}>
                <div className='row'>
                    <label>Please Help Us With your Name :  </label> 
                    <input className={'form-control'} value={this.state.username} onChange={this.getUserName} autoFocus />
                    <button className={'btn btn-primary btn-lg mx-auto'} style={{marginTop:25}} onClick={ this.handleSubmit} >Username</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userId : state.UserId.userId
})

const mapDispatchToProps = dispatch => {
    return {
        setUserId : (payload) => dispatch({type : 'SET_USER_ID',payload})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

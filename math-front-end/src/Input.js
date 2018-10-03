import React, {Component} from 'react'
import caChing from './sound/ca_ching.mp3'


class Input extends Component {

  state={
    answer:""
  }

  isCorrect = () => {
   if(this.props.isCorrect === true){
     return (
       <p className="is-correct">Correct answer, great job!</p>
     )
   }
   else if (this.props.isCorrect === false) {
     return (
       <p className="is-correct">Incorrect answer but we can always try again!</p>
     )
   }
   else {
     return ""
   }
  }

  alert = () => {
   this.myRef = React.createRef();
   console.log(this.props);
   if(this.props.isCorrect === true){
     return (
       // const sound = new Audio('./sound/ca_ching.mp3')
       // sound.play()
       <audio ref={this.myRef} src={caChing} autoPlay/>
     )
   }
  }

  handleOnChange = (event) =>{
    this.setState({answer: event.target.value})
  }

  resetAnswer = () =>{
    this.setState({answer: ""})
  }


  render(){
    console.log(this.state);
    return(
      <div>
        {this.alert()}
        <br/>
        <br/>
        {/* MAKE USER FRIENDLY <h3>{"round questions up .5 or above, else round down."}</h3> */}
        {this.isCorrect()}
        <form
          onSubmit={(event)=>{this.props.submit(event, this.state.answer, this.props.question,this.resetAnswer)}}
          >
          <div className='ui huge icon input'>
            <input type='text' size="10" value={this.state.answer} onChange={(event) => {this.handleOnChange(event)}}/>
            <i aria-hidden='true'/>
          </div>
          <span> </span><input className="ui olive button big" type="submit"/><br/>
          <div className='ui large pointing label'>Write your answer here and click "Submit"</div>
        </form>
      </div>
    )
  }
}

export default Input

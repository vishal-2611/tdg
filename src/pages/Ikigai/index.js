import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'

export class Ikigai extends Component {
   constructor(props){
      super(props);
      this.state ={
         text : ''
      }
   }

   getText = (event) =>{
      let text = event.target.getAttribute('data-text');
      this.setState({text : text});

   }
   render() {
      return (
         <div className='container' style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:20}}>   
            <div className="row">
               <svg
                  xmlnssvg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="440px"
                  height="440px"
                  viewBox="0 0 310 310"
                  version="1.1">
                  <g>
                     <path
                        d="m 154.96094,0.07031 a 94.488188,94.488188 0 0 0 -89.724612,65.23633 94.488189,94.488189 0 0 1 29.251953,-4.76367 94.488189,94.488189 0 0 1 60.523439,21.95508 94.488188,94.488188 0 0 1 60.42187,-21.95508 94.488188,94.488188 0 0 1 29.22852,4.69726 94.488188,94.488188 0 0 0 -89.70117,-65.16992 z"
                        style={{ fill: "#f6f57e" }}
                        data-text="What you're good at?"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 244.66211,65.24023 a 94.488188,94.488188 0 0 1 4.78711,29.31836 94.488188,94.488188 0 0 1 -21.95508,60.52341 94.488189,94.488189 0 0 1 21.95508,60.4219 94.488189,94.488189 0 0 1 -4.7207,29.2949 94.488188,94.488188 0 0 0 65.19336,-89.7676 94.488188,94.488188 0 0 0 -65.25977,-89.79097 z"
                        style={{ fill: "#feb3ad" }}
                        data-text="What you love?"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 154.91016,227.5645 a 94.488189,94.488189 0 0 1 -60.421879,21.955 94.488189,94.488189 0 0 1 -29.294922,-4.7207 94.488188,94.488188 0 0 0 89.767581,65.1934 94.488188,94.488188 0 0 0 89.79101,-65.2598 94.488188,94.488188 0 0 1 -29.31836,4.7871 94.488188,94.488188 0 0 1 -60.52343,-21.955 z"
                        style={{ fill: "#a2ffe6" }}
                        data-text="What the world needs?"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="M 65.195312,65.26367 A 94.488188,94.488188 0 0 0 0,155.0312 94.488188,94.488188 0 0 0 65.259766,244.8223 94.488188,94.488188 0 0 1 60.472656,215.5039 94.488188,94.488188 0 0 1 82.427734,154.9805 94.488189,94.488189 0 0 1 60.472656,94.55859 94.488189,94.488189 0 0 1 65.195312,65.26367 Z"
                        style={{ fill: "#d7ff98" }}
                        data-text="What you can be paid for?"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 215.43359,60.54297 a 94.488188,94.488188 0 0 0 -60.61132,22.02148 94.488188,94.488188 0 0 1 29.36718,43.14844 94.488188,94.488188 0 0 1 43.27735,29.29881 94.488188,94.488188 0 0 0 21.98242,-60.45311 94.488188,94.488188 0 0 0 -4.78711,-29.31836 94.488188,94.488188 0 0 0 -29.22852,-4.69726 z"
                        style={{ fill: "#ffcc81" }}
                        data-text="MISSION"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 227.42773,154.8926 a 94.488188,94.488188 0 0 1 -43.14843,29.3672 94.488188,94.488188 0 0 1 -29.29883,43.2773 94.488188,94.488188 0 0 0 60.45312,21.9824 94.488188,94.488188 0 0 0 29.31836,-4.7871 94.488188,94.488188 0 0 0 4.69727,-29.2285 94.488188,94.488188 0 0 0 -22.02149,-60.6113 z"
                        style={{ fill: "#d3cbb5" }}
                        data-text="VOCATION"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 82.455078,155.0508 a 94.488188,94.488188 0 0 0 -21.982422,60.4531 94.488188,94.488188 0 0 0 4.78711,29.3184 94.488188,94.488188 0 0 0 29.228515,4.6972 94.488188,94.488188 0 0 0 60.611329,-22.0215 94.488188,94.488188 0 0 1 -29.36719,-43.1484 94.488188,94.488188 0 0 1 -43.277342,-29.2988 z"
                        style={{ fill: "#a7ffb1" }}
                        data-text="PROFESSION"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 94.488281,60.54297 a 94.488188,94.488188 0 0 0 -29.318359,4.78711 94.488188,94.488188 0 0 0 -4.697266,29.22851 94.488188,94.488188 0 0 0 22.021485,60.61131 94.488188,94.488188 0 0 1 43.148439,-29.36717 94.488188,94.488188 0 0 1 29.29883,-43.27734 94.488188,94.488188 0 0 0 -60.453129,-21.98242 z"
                        style={{ fill: "#d9f377" }}
                        data-text="PASSION"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 184.22461,125.81641 a 94.488189,94.488189 0 0 1 4.75195,29.21479 94.488189,94.488189 0 0 1 -4.71679,29.2852 94.488188,94.488188 0 0 0 43.23437,-29.2344 94.488188,94.488188 0 0 0 -43.26953,-29.26559 z"
                        style={{ fill: "#d2ad83" }}
                        data-text="Excitement and complacency but sense of uncertainly"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 184.17578,184.2949 a 94.488189,94.488189 0 0 1 -29.21484,4.752 94.488189,94.488189 0 0 1 -29.28516,-4.7168 94.488188,94.488188 0 0 0 29.23438,43.2344 94.488188,94.488188 0 0 0 29.26562,-43.2696 z"
                        style={{ fill: "#a1c48d" }}
                        data-text="Confortable but feeling of emptiness"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 125.66211,125.74609 a 94.488188,94.488188 0 0 0 -43.234376,29.23441 94.488188,94.488188 0 0 0 43.269536,29.2656 94.488189,94.488189 0 0 1 -4.75196,-29.2149 94.488189,94.488189 0 0 1 4.7168,-29.28511 z"
                        style={{ fill: "#a1d183" }}
                        data-text="Satisfaction but feeling of uselessness"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 155.01172,82.49805 a 94.488188,94.488188 0 0 0 -29.26563,43.26953 94.488189,94.488189 0 0 1 29.21485,-4.75196 94.488189,94.488189 0 0 1 29.28515,4.7168 94.488188,94.488188 0 0 0 -29.23437,-43.23437 z"
                        style={{ fill: "#cabf86" }}
                        data-text="Delight and fullness, but no wealth"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                     <path
                        d="m 154.96094,121.01562 a 94.488189,94.488189 0 0 0 -29.31836,4.78711 94.488189,94.488189 0 0 0 -4.69727,29.22847 94.488189,94.488189 0 0 0 4.78711,29.3184 94.488189,94.488189 0 0 0 29.22852,4.6973 94.488189,94.488189 0 0 0 29.31836,-4.7871 94.488189,94.488189 0 0 0 4.69726,-29.2286 94.488189,94.488189 0 0 0 -4.78711,-29.31831 94.488189,94.488189 0 0 0 -29.22851,-4.69727 z"
                        style={{ fill: "#6b8761" }}
                        data-text="Ikigai"
                        onMouseEnter={(event)=>this.getText(event)}
                     />
                  </g>
               </svg>
            </div>
            <div className="row" style={{display:'flex',flexDirection:'column'}}>
               <p id='text'>{this.state.text}</p>
               <ul>
                 { this.props.allAnswers.map((item,index) =>
                       item.question === this.state.text ?
                     <li key={index}>{item.answer}</li> :
                     console.log(item.question === this.state.text)
                  )}
               </ul>
            </div>
         <div className="row">
            <input type="button" className={"btn btn-primary"} value="Go back" onClick={()=>this.props.history.push('/question')} />
         </div>
         </div>
      )
   }
}
const mapStateToProps = state => ({
   allAnswers : state.UserAnswers.answers,
   userId: state.UserId.userId
})
export default connect(mapStateToProps)(Ikigai)

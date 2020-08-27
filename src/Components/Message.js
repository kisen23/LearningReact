import React ,{Component } from 'react'
import Button from '@material-ui/core/Button';


 class Message extends Component{
    constructor(){
        super()
        this.state={
          kishan:  'Welcome to my channel'
        }
    }
    changeMessage(){
        this.setState({
            kishan:'thank you for subscribing'
        })
     
    }
    showCount(){
        this.setState({
            kishan:"count+1"
        })
    }
   

     render(){
       return (
         <div>
             <Button onClick= {()=>this.changeMessage()} variant="contained" color="primary" disableElevation>
             Disable elevation
             </Button>
             <h1>{this.state.kishan}</h1>
             <button onClick = {() =>this.showCount()}>Subscribe</button>
         </div>
         )
         
     }
 }

 
 
 export default Message
 
import React,{Component} from "react";


class Test extends Component {
    constructor(props){
        super(props);
        
    }
    onButtonClick = (e) => console.log('object');
    
render(){
    return <div onClick={this.onButtonClick}>ClickMe </div>;
}


}

export default Test;
import React from 'react'
import ReactDOM,{render} from "react-dom";
import '../css/main.css'



class Header extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        var image = this.props.imgUrl
        var mainText = this.props.mainText
        var subText = this.props.subText

        return(
            <div className='header'>
                    <div className='layer'>
                    
                    </div>
            </div>
        )
    }
}
export default Header
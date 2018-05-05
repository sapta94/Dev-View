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
            <div>
                <div className='header'>
                        <div className='layer'>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h4 className="card-text">Dev View</h4>
                </div>
                </div>
            </div>
        )
    }
}
export default Header
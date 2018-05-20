import React from 'react'
import ReactDOM,{render} from "react-dom";
import axios from 'axios'

class Results extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var data=this.props.result

        return(
            <div className="row container justify-content-md-center">
            {
                data.map(function(item,index){
                    return(
                        <div className="card col-md-4" style={{width: "18rem"}}>
                        <img className="card-img-top" src={item.avatar_url} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text"><b>GITHUB ID: </b>{item.login} </p>
                            <p className="card-text"><b>Score: </b>{item.score} </p>
                            <a href={item.html_url} target="_blank" className="card-link">View Profile</a>
                        </div>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}

export default Results
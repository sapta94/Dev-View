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
            <div style={{backgroundColor:'teal',}}>
                <div className="searchHead">
                    <p>-Results Here-</p>
                </div>
            <div className="row">
            {
                data.map(function(item,index){
                    return(
                        <div className="card col-md-3" style={{width: "12rem",marginLeft:"70px",marginBottom:"10px"}}>
                        <img className="card-img-top" src={item.avatar_url} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text"><b>GITHUB ID: </b>{item.login} </p>
                            <p className="card-text"><b>Score: </b>{item.score} </p>
                            <a href={item.html_url} target="_blank" className="card-link">View Profile</a>
                            <a href={item.html_url} target="_blank" className="card-link">More details</a>
                        </div>
                        </div>
                    )
                })
            }

            </div>
            </div>
        )
    }
}

export default Results
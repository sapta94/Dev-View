import React from 'react'
import ReactDOM,{render} from "react-dom";
import axios from 'axios'

class Results extends React.Component{
    constructor(props){
        super(props)
    }
    getDetails(url){
        axios.get(url).then(function(response){
            console.log(response)
        })
    }
    render(){
        var data=this.props.result
        var that=this;
        return(
            <div style={{backgroundColor:'teal',}}>
                <div className="searchHead">
                    <p>-Results Here-</p>
                </div>
            <div className="row">
            {
                data.map(function(item,index){
                    return(
                        <div className="card col-md-3 resultCards">
                        <img className="card-img-top" src={item.avatar_url} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text"><b>GITHUB ID: </b>{item.login} </p>
                            <p className="card-text"><b>Score: </b>{item.score} </p>
                            <a href={item.html_url} target="_blank" className="card-link">View Profile</a>
                            <a onClick={that.getDetails(item.url)}  className="card-link">More details</a>
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
import React from 'react'
import ReactDOM,{render} from "react-dom";
import axios from 'axios'
import Modal from 'react-awesome-modal';

class Results extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modal:false,
            moreData:{

            }
        }
        this.getDetails=this.getDetails.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }
    getDetails(url){
        var that=this
        axios.get(url).then(function(response){
            that.setState({
                moreData:response.data,
                modal:true
            })
        })
    }
    closeModal(){
        this.setState({
            modal:false
        })
    }
    render(){
        var data=this.props.result
        var that=this;
        if(this.state.modal){
            var modalView=<Details visible={that.state.modal} data={this.state.moreData} closeModal={that.closeModal}/>
        }
        else{
            var modalView=""
        }
        return(
            <div style={{backgroundColor:'teal'}}>
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
                            <a onClick={()=>that.getDetails(item.url)}  className="card-link">More details</a>
                        </div>
                        </div>
                    )
                })
            }

            </div>
                {modalView}
            </div>
        )
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : this.props.visible
        }
    }
 
    openModal() {
        this.setState({
            visible : this.props.visible
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        var data=this.props.data
        console.log(this.props.data)
        return (
            
                <Modal visible={true} width="600" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <center><h1><i>Details:</i></h1></center>
                        <table class="table table-bordered">
                            <tr>
                                <th>Name:</th>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <th>Bio:</th>
                                <td>{data.bio||'N/A'}</td>
                            </tr>
                            <tr>
                                <th>Company:</th>
                                <td>{data.company||'N/A'}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{data.email||'N/A'}</td>
                            </tr>
                            <tr>
                                <th>Location:</th>
                                <td>{data.location}</td>
                            </tr>
                            <tr>
                                <th>Followers:</th>
                                <td>{data.followers}</td>
                            </tr>
                            <tr>
                                <th>Following:</th>
                                <td>{data.following}</td>
                            </tr>
                        </table>
                        {/* <h1>Details</h1>
                        <p>Name: {data.name}</p>
                        <p>Bio: {data.bio}</p>
                        <p>Company: {data.company}</p>
                        <p>Email: {data.email}</p>
                        <p>Location: {data.location}</p>
                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p> */}
                        <center><button type="button" onClick={() => this.props.closeModal()} class="btn btn-primary">Close</button></center>
                    </div>
                </Modal>
            
        );
    }
}

export default Results
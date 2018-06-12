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
                moreData:response,
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
            var modalView=<Details visible={that.state.modal} closeModal={that.closeModal}/>
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
        return (
            
                <Modal visible={true} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Details</h1>
                        <p>Name</p>
                        <p>Github Profile</p>
                        <p></p>
                        <a href="javascript:void(0);" onClick={() => this.props.closeModal()}>Close</a>
                    </div>
                </Modal>
            
        );
    }
}

export default Results
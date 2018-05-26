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
    }
    getDetails(url){
        axios.get(url).then(function(response){
            this.setState({
                moreData:response
            })
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
                            <a onClick={()=>that.getDetails(item.url)}  className="card-link">More details</a>
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

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Details</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default Results
import React from 'react'
import ReactDOM,{render} from "react-dom";


class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            formData:{
                'name':'',
                'loc':'',
                'repo':'',
                'lang':'',
                'commit':''
            }
        }
        this.onChange=this.onChange.bind(this)
    }

    onChange(e){
        var id=e.target.name;
        var val=e.target.value;
        console.log(id+'-'+val)
        var formData = this.state.formData;
        formData[id]=val;
        this.setState({
            formData:formData
        })
    }

    render(){
        var data=this.state.formData;
        var that=this;
        return(
            <div>
                <div className="searchHead">
                    <p>-Search Here-</p>
                </div>
                <div class="row justify-content-md-center">
                <div class="form-group col-md-8">
                    <label for="name">Name:</label>
                    <input type="text" onChange={(e)=>{that.onChange(e)}} value={data.name} class="form-control" name="name"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="loc">Location:</label>
                    <input type="text" onChange={(e)=>{that.onChange(e)}} value={data.loc} class="form-control" name="loc"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="repo">Repositories:</label>
                    <input type="text" onChange={(e)=>{that.onChange(e)}} value={data.repo} class="form-control" name="repo"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="lang">Language:</label>
                    <input type="text" onChange={(e)=>{that.onChange(e)}} value={data.lang} class="form-control" name="lang"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="commit">Commits:</label>
                    <input type="text" onChange={(e)=>{that.onChange(e)}} value={data.commit} class="form-control" name="commit"/>
                </div>
                </div>
                <center><button type="button" class="btn btn-primary">Search</button></center>
            </div>
        )
    }
}

export default SearchBar
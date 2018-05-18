import React from 'react'
import ReactDOM,{render} from "react-dom";


class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="searchHead">
                    <p>-Search Here-</p>
                </div>
                <div class="form-group col-md-8">
                    <label for="usr">Name:</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="repo">Repositories:</label>
                    <input type="text" class="form-control" id="repo"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="topic">Topics:</label>
                    <input type="text" class="form-control" id="topic"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="topic">Topics:</label>
                    <input type="text" class="form-control" id="topic"/>
                </div>
                <div class="form-group col-md-8">
                    <label for="commit">Commits:</label>
                    <input type="text" class="form-control" id="commit"/>
                </div>
            </div>
        )
    }
}

export default SearchBar
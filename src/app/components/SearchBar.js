import React from 'react'
import ReactDOM,{render} from "react-dom";


class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="searchBar">
                <h3>-Search Here-</h3>
            </div>
        )
    }
}

export default SearchBar
import React from "react";
import ReactDOM,{render} from "react-dom";
import Header from './components/Header'

class App extends React.Component{
    render(){
        return (
            <div>
                <Header imgUrl='https://media-public.fcbarcelona.com/20157/74594198/910692/1.2/910692.jpg'/>
            </div>
        )
    }
}
render(<App />,window.document.getElementById('root'));
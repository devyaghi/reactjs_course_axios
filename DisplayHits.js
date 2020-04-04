import React from "react";
import axios_o from 'axios'

export default class DisplayHits extends React.Component{

    // axios

    constructor() {
        super();
        this.state={hits:[]}
    }


    render() {
        return (this.state.hits.map(hit=>
        <div >{hit.author} {hit.title}</div>
        ))
    }


    componentDidMount() {

        /* fetch("https://hn.algolia.com/api/v1/search")
            .then(response1=>response1.json())
            .then(data=> this.setState({hits:data.hits}))

         */

            axios_o.get("https://hn.algolia.com/api/v1/search")
            .then(response=>{
                console.log(response);
                this.setState({hits:response.data.hits})
            });


    }

}
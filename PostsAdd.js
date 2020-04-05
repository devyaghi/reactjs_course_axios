import React from "react";
import axios_o from 'axios';
export default class PostsAdd extends React.Component{

    constructor() {
        super();
        this.state={
            title:'',
            body:'',
            userId:''
        };
    }


    handleTitlechange=(e)=>{
        this.setState({title:e.target.value});
    }


    handleBodychange=(e)=>{
        this.setState({body:e.target.value});
    }

    handleUserIdchange=(e)=>{
        this.setState({userId:e.target.value});
    }


    SaveOnClick=()=>{
       // console.log(this.state.title + ''+ this.state.body + ''+this.state.userId)
        axios_o.post("https://jsonplaceholder.typicode.com/posts",{
            title:this.state.title,
            body:this.state.body,
            userId:this.state.userId
        }).then(response=> {
                console.log(response)
                console.log("bye")
            }
        );

    }

    render() {
        return (
            <form>
            <div>
                <label>Title</label>
                <input type="text" onChange={this.handleTitlechange}/>
            </div>
                <div>
                    <label>Body</label>
                    <input type="text" onChange={this.handleBodychange}/>
                </div>
                <div>
                    <label>UserId</label>
                    <input type="text" onChange={this.handleUserIdchange}/>
                </div>


                <div>
                    <input type="button" value="Save post" onClick={this.SaveOnClick}/>
                </div>

            </form>
        )


    }


}
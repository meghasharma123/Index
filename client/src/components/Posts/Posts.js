import React from "react";
import Post from "./Post/Post";
import useStyle from './styles';


const Posts = () =>{
    const classes = useStyle();

    return(
        <div>
        <h1 className={classes.actionDiv}>Posts</h1>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;
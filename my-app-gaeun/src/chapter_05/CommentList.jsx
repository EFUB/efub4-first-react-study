import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이가은",
        comment: "로또 1등 당첨 기원 정권찌르기 1471일차.",
    },

    {
        name: "이가은",
        comment: "로또 1등 당첨 기원 정권찌르기 1472일차.",
    },
    {
        name: "이가은",
        comment: "로또 1등 당첨 기원 정권찌르기 1473일차.",
    },
    
    
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })};
        </div>
    );
}

export default CommentList;
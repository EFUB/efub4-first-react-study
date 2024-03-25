import React from 'react';
import Comment from "./Comment";

const comments = [
    {
        name: "이가빈",
        comment: "우당탕탕 리액트스터디",
    },
    {
        name: "이가은",
        comment: "my-app이 왜 삭제가 안되나요...?",
    },
    {
        name: "빌리부",
        comment: "집에 가고 싶어요,,,",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
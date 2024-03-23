import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이찬희",
    comment: "안녕하세요, 이찬희입니다.",
  },
  {
    name: "키란",
    comment: "안녕하십니까",
  },
  {
    name: "이건희",
    comment: "히히",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;

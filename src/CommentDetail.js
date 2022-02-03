import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div class="comment">
      <a href="/" className="avatar">
        <img
          alt="img"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
      </a>
      <div class="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div class="metadata">
          <span class="date">{props.timeAgo}</span>
        </div>
        <div class="text">{props.comment}</div>
        <div class="actions">
          <a href="/" class="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;

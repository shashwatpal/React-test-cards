import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container-fluid comments">
      <ApprovalCard>
        <div>
          <h4 className="heading">Greetings</h4>
          Hey Wassup ?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00 P.M"
          comment="How nice !!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Pam"
          timeAgo="Today at 5:00 P.M"
          comment="Very informative !!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Today at 6:00 P.M"
          comment="I like it!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

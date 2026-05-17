export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map( comment =>
    <Comment key={comment.id} comment={comment}></Comment>
    )}
    </div>
);

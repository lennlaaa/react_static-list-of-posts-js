export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h3>{post.title}</h3>

    <p>{post.body}</p>

    <p>
      Author: {post.user.name} {post.user.email}
    </p>

    <div className="PostInfo__comments">
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  </div>
);

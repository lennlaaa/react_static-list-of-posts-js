import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h3>{post.title}</h3>

    <p>{post.body}</p>

    <UserInfo user={post.user} />

    <div className="PostInfo__comments">
      <CommentList comments={post.comments} />
    </div>
  </div>
);

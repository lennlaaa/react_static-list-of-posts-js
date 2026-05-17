export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

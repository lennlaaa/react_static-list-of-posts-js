export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <div className="UserInfo__name">
      {user.name}
    </div>
    <div className="UserInfo__email">
      {user.email}
    </div>
  </div>
);

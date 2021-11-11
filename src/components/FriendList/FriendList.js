import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list inline-block">
      {friends.map((el) => (
        <FriendListItem user={el} key={el.id} />
      ))}
    </ul>
  );
}

export default FriendList;

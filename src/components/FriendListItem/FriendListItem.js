function FriendListItem({ user: { avatar, name, isOnline } }) {
  const onlineIndicator = `absolute w-5 h-5 rounded-full top-1/2 transform -translate-y-1/2 ${
    isOnline ? "bg-green-700" : "bg-red-700"
  }`;
  return (
    <li className="flex relative items-center m-2 shadow-my p-2">
      <span className={onlineIndicator}></span>
      <img className="ml-7" src={avatar} alt={name} width="48" />
      <p className="ml-3 mr-10">{name}</p>
    </li>
  );
}

export default FriendListItem;

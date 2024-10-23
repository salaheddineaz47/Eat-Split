import FriendListItem from "./FriendListItem";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((fiendData) => (
        <FriendListItem
          key={fiendData.id}
          friend={fiendData}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

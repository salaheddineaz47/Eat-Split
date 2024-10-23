import Button from "./Button";

export default function FriendListItem({
  friend,
  onSelectedFriend,
  selectedFriend,
}) {
  const messageColor =
    friend.balance < 0 ? `red` : friend.balance > 0 ? "green" : "";

  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      <p style={{ color: messageColor }}>
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}£`
          : friend.balance > 0
          ? `${friend.name} owes you ${Math.abs(friend.balance)}£`
          : `You and ${friend.name} are even`}
      </p>

      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}

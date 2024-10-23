import { useState } from "react";
import initialFriends from "./assets/FriendsData";

import Button from "./Componnents/Button";
import FriendList from "./Componnents/FriendList";
import FormAddFriend from "./Componnents/FormAddFriend";
import FormSplitBill from "./Componnents/FormSplitBill";

export default function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddfriend = () => setShowAddForm((isop) => !isop);

  const handleAddfriend = (newFriend) => {
    setFriendList((friends) => [...friends, newFriend]);
    setShowAddForm(false);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  };

  const handleSplitBill = (balance) => {
    setFriendList(
      friendList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friendList}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddForm && <FormAddFriend onAddfriend={handleAddfriend} />}
        <Button onClick={handleShowAddfriend}>
          {showAddForm ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

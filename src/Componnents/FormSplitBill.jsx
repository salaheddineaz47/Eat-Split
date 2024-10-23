import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPay, setWhoPay] = useState("user");

  // const handleBill = (e) => setBill(Number(e.target.value));
  // const handlepaidByUser = (e) =>
  //   setPaidByUser(
  //     Number(e.target.value) < bill ? Number(e.target.value) : paidByUser
  //   );
  // const handleWhoPay = (e) => setWhoPay(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoPay === "user" ? -paidByFriend : paidByFriend);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <FormInput value={bill} onChange={(e) => setBill(Number(e.target.value))}>
        <span>💸</span>Bill value
      </FormInput>

      <FormInput
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) < bill ? Number(e.target.value) : paidByUser
          )
        }
      >
        <span>🧍</span>Your expense
      </FormInput>

      <FormInput value={paidByFriend} onRead={true}>
        <span>🧑‍🤝‍🧑</span>
        {selectedFriend.name}'s expense:
      </FormInput>

      <label>🤑Who is paying the bill ?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

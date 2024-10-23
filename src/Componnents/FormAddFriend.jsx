import { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";

export default function FormAddFriend({ onAddfriend }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState(`https://i.pravatar.cc/48`);

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!name || !img) return;

    let id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${img}?u=${id}`,
      balance: 0,
    };
    onAddfriend(newFriend);

    setName("");
    setImg("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSumbit}>
      <FormInput value={name} onChange={(e) => setName(e.target.value)}>
        🧑‍🤝‍🧑Friend Name
      </FormInput>
      <FormInput value={img} onChange={(e) => setImg(e.target.value)}>
        <span>📷</span>Image url
      </FormInput>
      <Button>Add</Button>
    </form>
  );
}

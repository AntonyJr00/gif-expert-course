import { useState } from "react";

interface PropsAddCategory {
  setCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (value: string) => void;
}

export const AddCategory = ({ onNewCategory }: PropsAddCategory) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

import { useState } from "react";
import { GiftGrid, AddCategory } from "./components";

const GiftExpertApp = (): React.JSX.Element => {
  const [categories, setCategories] = useState(["OnePunch"]);

  const onAddCategory = (value: string) => {
    if (categories.includes(value)) return;
    setCategories([value]);
  };
  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((element: string) => (
        <GiftGrid key={element} category={element} />
      ))}
    </>
  );
};

export default GiftExpertApp;

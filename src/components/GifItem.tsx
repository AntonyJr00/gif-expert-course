import { Gift } from "../helpers/getGifts";

export const GifItem = ({ title, images }: Gift) => {
  return (
    <div className="card">
      <img src={images} alt={"card"} />
      <p>{title}</p>
    </div>
  );
};

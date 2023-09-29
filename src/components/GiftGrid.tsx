import { useEffect } from "react";
import { Gift, User } from "../helpers/getGifts";
import { useFetchGifs, useFetchUsers } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

interface PropsGifGrid {
  category: string;
}

export const GiftGrid = ({ category }: PropsGifGrid) => {
  const { gifs, isLoading } = useFetchGifs(category);
  const { usuario } = useFetchUsers();

  // console.log(usuario);

  // const { email, gender, picture  usuario;

  useEffect(() => {}, [gifs, isLoading]);

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {gifs &&
          gifs?.map((data: Gift) => {
            return (
              <div key={data.id}>
                <GifItem {...data} />
              </div>
            );
          })}
      </div>

      {usuario &&
        usuario?.map((data: User) => (
          <div key={data.id}>
            <img src={data.picture} alt="images" />
            <h2>{data.gender}</h2>
            <p>{data.email}</p>
          </div>
        ))}
    </>
  );
};

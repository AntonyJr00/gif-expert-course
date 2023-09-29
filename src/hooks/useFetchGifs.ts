import { useEffect, useState } from "react";
import { Gift, User, getGift, getUsers } from "../helpers/getGifts";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gift[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const newIimages = await getGift(category);
      setGifs(newIimages);
      setIsLoading(false);
    };
    getImages();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};

export const useFetchUsers = () => {
  const [usuario, setUsuario] = useState<User[] | []>([]);

  useEffect(() => {
    const getUsuarios = async () => {
      const newUsers = await getUsers();
      setUsuario(newUsers);
    };
    getUsuarios();
  }, []);

  return {
    usuario,
  };
};

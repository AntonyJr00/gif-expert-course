export interface Gift {
  id: number | string;
  title: string;
  images: string;
}

interface GiftData {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

export const getGift = async (category: string) => {
  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=UZxDvY5sprTi1z3MFjijdEAGGIqAYKEB&q=${category}&limit=10`;
  const resp: Response = await fetch(url);
  const { data } = await resp.json();

  const gifts: Gift[] | undefined = data?.map((gift: GiftData) => {
    return {
      id: gift.id,
      title: gift.title,
      images: gift.images.original.url,
    };
  });

  return gifts;
};

interface UserData {
  id: {
    value: string;
  };
  email: string;
  picture: {
    medium: string;
  };
  gender: string;
}

export interface User {
  id: string | number;
  email: string;
  picture: string;
  gender: string;
}

export const getUsers = async () => {
  const url: string = `https://randomuser.me/api/`;
  const respuesta: Response = await fetch(url);
  const { results } = await respuesta.json();
  const usuarios: User[] = results?.map((user: UserData) => {
    return {
      id: user.id.value,
      email: user.email,
      picture: user.picture.medium,
      gender: user.gender,
    };
  });

  return usuarios;
};

getUsers();

import React from 'react';

import Post from '@/components/Post';

import { HomeWrap } from './HomeStyle';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Home = () => {
  const { data: posts } = useQuery({
    queryKey: ['Posts'],
    queryFn: async () => {
      const response = await fetch('http://stand/api/cars');
      return await response.json();
    },
  });

  //fake chamada api POST
  const createPost = async ({ nome }: { nome: string }): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return nome;
  };

  //MUTATION
  const queryClient = useQueryClient();

  const { mutateAsync: createPostFn } = useMutation({
    mutationFn: createPost,
    onSuccess(_, variables) {
      // const cached = queryClient.getQueryData(['Posts']);
      // console.log(cached);

      queryClient.setQueryData(['Posts'], (data: any) => {
        return [...data, { nome: variables.nome }];
      });
    },
  });
  //FIM MUTATION

  //função que chama a mutation
  const handleCreatePost = async (data: { nome: string }) => {
    try {
      await createPostFn({ nome: data.nome });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeWrap>
      <h1 onClick={() => handleCreatePost({ nome: 'mario' })}>add</h1>
      {posts?.map((post: any, index: number) => {
        return <Post key={index} />;
      })}
    </HomeWrap>
  );
};

export default Home;

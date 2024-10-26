import React from 'react';

import Post from '@/components/Post';

import { HomeWrap } from './HomeStyle';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/utils/mockData';
import { IPost } from '@/utils/types';

const Home = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['Posts'],
    queryFn: async () => {
      const response = await getPosts();
      return response;
    },
  });

  //MUTATION
  // const queryClient = useQueryClient();

  // const { mutateAsync: createPostFn } = useMutation({
  //   mutationFn: createPost,
  //   onSuccess(_, variables) {
  //     // const cached = queryClient.getQueryData(['Posts']);
  //     // console.log(cached);

  //     queryClient.setQueryData(['Posts'], (data: IPost[]) => {
  //       return [...data, { ...variables }];
  //     });
  //   },
  // });
  //FIM MUTATION

  //função que chama a mutation
  // const handleCreatePost = async (data: IPost) => {
  //   try {
  //     await createPostFn(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <HomeWrap>
      {isLoading
        ? 'Carregando ...'
        : posts?.map((post: IPost, index: number) => {
            return <Post key={index} data={post} />;
          })}
    </HomeWrap>
  );
};

export default Home;

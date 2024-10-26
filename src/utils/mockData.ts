import { IPost } from './types';

const posts: IPost[] = [
  {
    id: '1e2a3b4c-5d6e-7f8g-9h0i-1j2k3l4m5n6o',
    userName: 'user1',
    postMessage: {
      messageText: 'Olá, este é meu primeiro post!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-01T10:00:00Z'),
  },
  {
    id: '2e3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
    userName: 'user2',
    postMessage: {
      messageText: 'Gostando muito da nova plataforma!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-02T11:00:00Z'),
  },
  {
    id: '3e4c5d6e-7f8g-9h0i-1j2k-3l4m5n6o7p8q',
    userName: 'user3',
    postMessage: {
      messageText: 'Alguém sabe onde encontrar boas receitas?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-03T12:00:00Z'),
  },
  {
    id: '4e5d6e7f-8g9h-0i1j-2k3l-4m5n6o7p8q9r',
    userName: 'user4',
    postMessage: {
      messageText: 'Amo viajar! Alguma dica de destino?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-04T13:00:00Z'),
  },
  {
    id: '5e6f7g8h-9h0i-1j2k-3l4m-5n6o7p8q9r0s',
    userName: 'user5',
    postMessage: {
      messageText: 'Recomendo um ótimo livro que estou lendo!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-05T14:00:00Z'),
  },
  {
    id: '6e7f8g9h-0i1j-2k3l-4m5n-6o7p8q9r0s1t',
    userName: 'user6',
    postMessage: {
      messageText: 'Como anda o clima na sua cidade?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-06T15:00:00Z'),
  },
  {
    id: '7e8f9g0h-1j2k-3l4m-5n6o-7p8q9r0s1t2u',
    userName: 'user7',
    postMessage: {
      messageText: 'Alguém mais está assistindo a nova série?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-07T16:00:00Z'),
  },
  {
    id: '8e9f0g1h-2k3l-4m5n-6o7p-8q9r0s1t2u3v',
    userName: 'user8',
    postMessage: {
      messageText: 'Dicas de filmes para o final de semana?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-08T17:00:00Z'),
  },
  {
    id: '9f0g1h2j-3l4m-5n6o-7p8q-9r0s1t2u3v4w',
    userName: 'user9',
    postMessage: {
      messageText: 'Feliz com as pequenas conquistas do dia!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-09T18:00:00Z'),
  },
  {
    id: '0g1h2j3k-4m5n-6o7p-8q9r-0s1t2u3v4w5x',
    userName: 'user10',
    postMessage: { messageText: 'A primavera está linda!', messageImages: [] },
    postedAt: new Date('2023-10-10T19:00:00Z'),
  },
  {
    id: '1h2j3k4l-5n6o-7p8q-9r0s-1t2u3v4w5x6y',
    userName: 'user11',
    postMessage: {
      messageText: 'Votando nas minhas músicas favoritas!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-11T20:00:00Z'),
  },
  {
    id: '2j3k4l5m-6o7p-8q9r-0s1t-2u3v4w5x6y7z',
    userName: 'user12',
    postMessage: { messageText: 'Quem mais ama café?', messageImages: [] },
    postedAt: new Date('2023-10-12T21:00:00Z'),
  },
  {
    id: '3k4l5m6n-7o8p-9q0r-1s2t-3u4v5w6x7y8a',
    userName: 'user13',
    postMessage: { messageText: 'Dia de reciclar ideias!', messageImages: [] },
    postedAt: new Date('2023-10-13T22:00:00Z'),
  },
  {
    id: '4l5m6n7o-8p9q-0r1s-2t3u-4v5w6x7y8a9b',
    userName: 'user14',
    postMessage: {
      messageText: 'Música boa transforma o dia!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-14T23:00:00Z'),
  },
  {
    id: '5m6n7o8p-9q0r-1s2t-3u4v-5w6x7y8a9b0c',
    userName: 'user15',
    postMessage: {
      messageText: 'Vamos conversar sobre arte?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-15T00:00:00Z'),
  },
  {
    id: '6n7o8p9q-0r1s-2t3u-4v5w-6x7y8a9b0c1d',
    userName: 'user16',
    postMessage: {
      messageText: 'Animado para o evento do próximo mês!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-16T01:00:00Z'),
  },
  {
    id: '7o8p9q0r-1s2t-3u4v-5w6x-7y8a9b0c1d2e',
    userName: 'user17',
    postMessage: {
      messageText: 'Qual é a sua cor favorita?',
      messageImages: [],
    },
    postedAt: new Date('2023-10-17T02:00:00Z'),
  },
  {
    id: '8p9q0r1s-2t3u-4v5w-6x7y-8a9b0c1d2e3f',
    userName: 'user18',
    postMessage: {
      messageText: 'Cuidado com os sonhos, eles se realizam!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-18T03:00:00Z'),
  },
  {
    id: '9q0r1s2t-3u4v-5w6x-7y8z-0a1b2c3d4e5f',
    userName: 'user19',
    postMessage: {
      messageText: 'Um novo dia, novas oportunidades!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-19T04:00:00Z'),
  },
  {
    id: '0r1s2t3u-4v5w-6x7y-8z9a-1b2c3d4e5f6g',
    userName: 'user20',
    postMessage: {
      messageText: 'Vamos explorar o desconhecido!',
      messageImages: [],
    },
    postedAt: new Date('2023-10-20T05:00:00Z'),
  },
];

export const getPosts = async (): Promise<IPost[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts;
};

export const createPost = async (data: IPost): Promise<IPost> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
};

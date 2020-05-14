import axios, { AxiosResponse } from 'axios';
import { Payload } from '../types';

const url = 'https://tictactoe.api.01card.com.br';

const token = 'ck9x6x63f000001l33yvh5m5t';

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

const isOk = (res: AxiosResponse) => res.status >= 200 && res.status < 400;

export const api = {
  play: async (game: Payload): Promise<{ board: string }> => {
    try {
      const res = await axios.post(url, game, config);

      if (!isOk(res)) {
        throw new Error(`Error: [${res.status}] ${res.statusText}`);
      }

      return res.data;
    } catch (e) {
      throw new Error(`Failed to get url ${url} - ${e}`);
    }
  }
};

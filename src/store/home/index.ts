import { IState } from '@/api/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/home';

const state: IState = {
  movieList: [],
};

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  movieList: (state: IState) => state.movieList,
};

const mutations = {
};

const actions = {
  async movieList(context: { commit: Commit }, cate: string) {
    const res: any = await getMovieList(cate)
      .then((response: any) => response)
      // tslint:disable-next-line:no-console
      .catch((e: string) => console.error(e));
    return res;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

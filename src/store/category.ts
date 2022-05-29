import { createStore } from 'vuex';
import { getArticleCategory, getArticle } from '@/api/category';

const category = createStore({
  state() {
    return {
      ArticleCategory: [],
      Article: []
    };
  },
  mutations: {
    setArticle(state: any)
  },
   actions: {}
});

export default category;

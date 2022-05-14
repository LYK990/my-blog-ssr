import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

export interface State {
  count: number;
  isCollapse: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol(1);

export function createSSRStore() {
  return createStore({
    state() {
      return {
        count: 1,
        isCollpase: false
      };
    },
    mutations: {
      setIsCollapse(state: any, payload: any) {
        state.isCollapse = payload;
      }
    },
    actions: {}
  });
}

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}

import request from '@/utils/request';

/**
 * @router Get api/category/getArticleCategory
 * @desc 获取文章分类名称
 */
export const getArticleCategory = () => {
  return request({
    method: 'GET',
    url: '/api/category/getArticleCategory'
  });
};

/**
 * @router Get api/category/getArticle
 * @desc 获取文章
 */
export const getArticle = () => {
  return request({
    method: 'GET',
    url: '/api/category/getArticle'
    // responseType: 'blob'
  });
};

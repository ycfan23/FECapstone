const axios = require('axios');
const git = require('../expressconfig.js');

module.exports = {
  getAll: () => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getProdInfo: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getProdStyles: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}/styles`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getProdRelated: (prodID) => axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${prodID}/related`,
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
  }),

  getAllQs: (product_id) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: {
      product_id,
    }
  }),

  // getAnswers: (questionID) => axios({
  //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}`,
  //   method: 'get',
  //   headers: {
  //     campus: git.tokens.campus,
  //     Authorization: git.tokens.gitToken,

  //   },
  //   params: {
  //     product_id: questionID,
  //   },
  // }),

  getProdReviews: (product_id = 61575) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: { product_id },
  }),

  getProdReviewsMeta: (product_id = 61575) => axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
    method: 'get',
    headers: {
      campus: git.tokens.campus,
      Authorization: git.tokens.gitToken,

    },
    params: { product_id },
  }),
};

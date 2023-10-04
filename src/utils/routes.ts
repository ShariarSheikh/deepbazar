// ----------------------------------------------------------------------
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

//PUBLIC
export const PATH_PAGE = {
  comingSoon: '/support',
  page403: '/403',
  page404: '/404',
};

//SELLER
const ROOTS_SELLER = '/seller';
export const PATH_SELLER = {
  overview: path(ROOTS_SELLER, ''),
  category: path(ROOTS_SELLER, '/category'),
  orders: path(ROOTS_SELLER, '/manage-orders'),
  accountAndSettings: path(ROOTS_SELLER, '/account-settings'),
  products: {
    manage: path(ROOTS_SELLER, '/products/manage'),
    new: path(ROOTS_SELLER, '/products/add-new'),
  },
};

//USER
const ROOTS_USER = '/user';
export const PATH_USER = {
  overview: path(ROOTS_USER, ''),
  order: path(ROOTS_USER, '/order'),
  wishlist: path(ROOTS_USER, '/wishlist'),
  shippingAddress: path(ROOTS_USER, '/shipping-address'),
  newShippingAddress: path(ROOTS_USER, '/shipping-address/add-new'),
  reviews: path(ROOTS_USER, '/reviews'),
  questionAnswer: path(ROOTS_USER, '/question-answer'),
  account: path(ROOTS_USER, '/account'),
};

export const mainSiteLink = 'https://deepbazar.vercel.app';

<p align="center">
<img src="https://i.ibb.co/4t0Byjs/screencapture-deepbazar-vercel-app-2021-11-05-21-15-54.png" width="100%">
</p>
<p align="start">
  <img src="https://i.ibb.co/xCBYM6g/screencapture-deepbazar-vercel-app-profile-2021-11-05-21-21-20.png" width="100%">
</p>

<p align="start">
  <img src="https://i.ibb.co/1nGGZ29/screencapture-deepbazar-vercel-app-shop-product-2021-11-06-08-35-58.png" width="100%">
  <img src="https://i.ibb.co/dBJ7cVY/screencapture-deepbazar-vercel-app-shop-cart-2021-11-06-08-36-39.png" width="100%">
</p>




# eCommerce webstie  [Live Site](https://deepbazar.vercel.app/)

### Description

An eCommerce website but not real (Single Page Next js Application). Anyone can clone it and use this site or customize this. Readable and clean code. State management with react-redux.Users can create a new account or log in and they can upload profile pictures and remove the account. 

#### The Front-End technologies are - `Next js` , `React-Redux`, `Tailwind css`
#### The Back-End technologies use for (create account ,login,upload profile pictures) - `Nodejs` ,`MongoDB`, `Mongoose` ,`Express` ,`JWT` ,`Bcryptjs`


#### What is my purpose of making this website?

To include my cv or resume.


## Installing Setup

Clone this repository. If you don't know how to clone the git repository then check this [article](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

##### Create your .env file and put these environment variables

## These environment variables for users-

NEXT_PUBLIC_VERCEL_UR_LOGIN = login url
NEXT_PUBLIC_VERCEL_UR_SIGN_UP = create-account url
NEXT_PUBLIC_VERCEL_UR_PROFILE = get user data url
NEXT_PUBLIC_VERCEL_UR_PROFILE_IMG = upload profile picture
NEXT_PUBLIC_VERCEL_UR_DELETE_USER = delete-account url


## These environment variables for fetch product data - you don't have to change these variables just include this in your .env file -

NEXT_PUBLIC_VERCEL_UR_PRODUCT_ALL = /api/products/getProducts
NEXT_PUBLIC_VERCEL_UR_PRODUCT_TOP_SELLING = /api/products/topSelling
NEXT_PUBLIC_VERCEL_UR_PRODUCT_NEW_PRODUCT = /api/products/newProducts
NEXT_PUBLIC_VERCEL_UR_GET_SINGLE_PRODUCT = /api/products/getOne?
NEXT_PUBLIC_VERCEL_UR_GET_CATEGORY_PRODUCTS = /api/products/getCategoryList?category=



## Running the applications locally

Install the npm dependencies:

```bash
yarn install
```
to run this site
```bash
yarn dev
```


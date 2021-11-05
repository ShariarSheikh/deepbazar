// products category list
export const categoryList = [
  {
    id: 1,
    category: "All",
    img: "https://png.pngtree.com/png-vector/20190703/ourlarge/pngtree-shopping-bag-icon-in-trendy-style-isolated-background-png-image_1536177.jpg",
    link: "",
  },
  {
    id: 2,
    category: "Men's Clothes",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    link: "/men-clothes",
    categoryList: [
      {
        id: 1,
        text: "A",
        link: "/lala",
      },
      {
        id: 2,
        text: "A",
        link: "/lala",
      },
      {
        id: 3,
        text: "A",
        link: "/dadf",
      },
      {
        id: 4,
        text: "A",
        link: "/dadddaf",
      },
      {
        id: 5,
        text: "A",
        link: "/dadddaf",
      },
    ],
  },
  {
    id: 3,
    category: "Women's Clothes",
    img: "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M=",
    link: "/women-clothes",
    categoryList: [
      {
        id: 1,
        text: "A",
        link: "/lala",
      },
      {
        id: 2,
        text: "A",
        link: "/lala",
      },
      {
        id: 3,
        text: "A",
        link: "/dadf",
      },
      {
        id: 4,
        text: "A",
        link: "/dadddaf",
      },
      {
        id: 5,
        text: "A",
        link: "/dadddaf",
      },
    ],
  },
  {
    id: 4,
    category: "Bags",
    img: "https://png.pngitem.com/pimgs/s/297-2978659_pencil-case-in-the-bag-clipart-clipart-school.png",
    link: "/bags",
    categoryList: [
      {
        id: 1,
        text: "A",
        link: "/lala",
      },
      {
        id: 2,
        text: "A",
        link: "/lala",
      },
      {
        id: 3,
        text: "A",
        link: "/dadf",
      },
      {
        id: 4,
        text: "A",
        link: "/dadddaf",
      },
      {
        id: 5,
        text: "A",
        link: "/dadddaf",
      },
    ],
  },
  {
    id: 5,
    category: "Toys",
    img: "https://png.pngitem.com/pimgs/s/278-2782298_duck-dog-chew-toy-squeaky-dog-toys-hd.png",
    link: "/toys",
    categoryList: [
      {
        id: 1,
        text: "A",
        link: "/lala",
      },
      {
        id: 2,
        text: "A",
        link: "/lala",
      },
      {
        id: 3,
        text: "A",
        link: "/dadf",
      },
      {
        id: 4,
        text: "A",
        link: "/dadddaf",
      },
      {
        id: 5,
        text: "A",
        link: "/dadddaf",
      },
    ],
  },

  {
    id: 6,
    category: "Baby and Kids",
    img: "https://png.pngitem.com/pimgs/s/15-159849_baby-clothes-transparent-images-png-baby-clothes-png.png",
    link: "/baby-and-kids",
    categoryList: [
      {
        id: 1,
        text: "A",
        link: "/lala",
      },
      {
        id: 2,
        text: "A",
        link: "/lala",
      },
      {
        id: 3,
        text: "A",
        link: "/dadf",
      },
      {
        id: 4,
        text: "A",
        link: "/dadddaf",
      },
      {
        id: 5,
        text: "A",
        link: "/dadddaf",
      },
    ],
  },
];

// pages links
export const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "All Products",
    link: "/shop",
  },
  {
    id: 3,
    name: "Customer Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Help Center",
    link: "/help",
  },
];

export const products = [
  {
    id: 1,
    category: "men-clothes",
    title: "Men's White T-Shirt",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 5,
    currency: "৳",
    discountOffer: "11",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 2,
    category: "women-clothes",
    title: "Women's Red wedding dress",
    images: [
      "https://png.pngitem.com/pimgs/s/171-1713826_queen-red-dress-png-transparent-png.png",
      "https://png.pngitem.com/pimgs/s/171-1713826_queen-red-dress-png-transparent-png.png",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 109.0,
    minQuantity: 11,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 3,
    category: "bags",
    title: "Styles Bags 1",
    images: [
      "https://png.pngitem.com/pimgs/s/56-567175_school-bag-png-transparent-picture-school-bag-back.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 40.00,
    minQuantity: 20,
    currency: "৳",
    discountOffer: "3",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 4,
    category: "baby-and-kids",
    title: "baby's t-shirt",
    images: [
      "https://png.pngitem.com/pimgs/s/15-159849_baby-clothes-transparent-images-png-baby-clothes-png.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 5,
    category: "bags",
    title: "Big tadybear Bags",
    images: [
      "https://png.pngitem.com/pimgs/s/56-567274_nike-halfday-back-to-school-kids-backpack-nike.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 199.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 6,
    category: "toys",
    title: "toys lala",
    images: [
      "https://png.pngitem.com/pimgs/s/119-1199505_toy-story-4-life-size-talking-woody-action.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 29.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "11",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 7,
    category: "women-clothes",
    title: "Sari",
    images: [
      "https://png.pngitem.com/pimgs/s/491-4913073_thumb-image-masquerade-ball-black-ball-gown-wedding.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 95.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 8,
    category: "men-clothes",
    title: "Blcak T-shirt for man",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "3",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 9,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 10,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/194-1942828_long-sleeved-t-shirt-hd-png-download.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 300.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 11,
    category: "men-clothes",
    title: "Men's Clothes ",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 49.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "11",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 12,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/443-4431799_long-black-fur-coat-png-image-black-fur.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 69.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 13,
    category: "women-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/621-6217558_brown-long-double-breasted-coat-with-epaulettes-overcoat.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 609.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "3",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 14,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 100.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 15,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/679-6793994_long-coat-png-clipart-overcoat-transparent-png.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 16,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 299.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "11",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 17,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/531-5312252_kids-children-boy-korean-winter-basic-hooded-hoodie.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 469.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 18,
    category: "women-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/653-6539229_long-winter-coat-for-girl-hd-png-download.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 459.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "3",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 19,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 199.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 20,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/310-3107345_trench-coat-png-multi-fashion-pockets-plaid-lapel.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 599.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 21,
    category: "women-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/190-1903557_novelty-dqssx-sk-the-jamaica-flag-of-the.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 355.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "3",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 22,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 99.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 23,
    category: "women-clothes",
    title: "Women's Clothes jackets",
    images: [
      "https://png.pngitem.com/pimgs/s/53-534006_transparent-vertical-stripes-png-skirt-png-download.png",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 819.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: true,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 24,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 99.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 25,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 99.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 26,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 28.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 27,
    category: "men-clothes",
    title: "Men's Clothes jackets",
    images: [
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2028&q=80",
      "kads",
      "akdsjf",
      "kadsfa",
      "laksd",
    ],
    available: "In Stock",
    price: 57.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 28,
    category: "bags",
    title: "Bag",
    images: [
      "https://png.pngitem.com/pimgs/s/49-493511_school-bag-with-attached-lunch-box-hd-png.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 120.00,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 29,
    category: "bags",
    title: "Bag",
    images: [
      "https://png.pngitem.com/pimgs/s/667-6678659_kids-backpack-school-bag-mockup-free-hd-png.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 120.00,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 30,
    category: "bags",
    title: "Bag",
    images: [
      "https://png.pngitem.com/pimgs/s/297-2978659_pencil-case-in-the-bag-clipart-clipart-school.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 120.00,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "23",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 31,
    category: "toys",
    title: "toys lala",
    images: [
      "https://png.pngitem.com/pimgs/s/521-5211422_rex-toy-story-hd-png-download-toy-story.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 29.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "21",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 32,
    category: "toys",
    title: "toys lala",
    images: [
      "https://png.pngitem.com/pimgs/s/278-2782298_duck-dog-chew-toy-squeaky-dog-toys-hd.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 29.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 33,
    category: "baby-and-kids",
    title: "baby's t-shirt",
    images: [
      "https://png.pngitem.com/pimgs/s/324-3240680_dusk-blue-winter-zipsuit-hoodie-hd-png-download.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 10.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 34,
    category: "baby-and-kids",
    title: "baby's t-shirt",
    images: [
      "https://png.pngitem.com/pimgs/s/324-3240707_health-express-summer-short-sleeve-infant-clothing-christmas.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 59.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
  {
    id: 35,
    category: "baby-and-kids",
    title: "baby's t-shirt",
    images: [
      "https://png.pngitem.com/pimgs/s/6-67208_clip-art-for-free-download-baby-clothes-png.png",
       "kads",
        "akdsjf",
         "kadsfa",
          "laksd"
        ],
    available: "In Stock",
    price: 39.0,
    minQuantity: 10,
    currency: "৳",
    discountOffer: "",
    newProduct: false,
    topSelling: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nam consectetur perspiciatis harum quis rerum nemo aliquid doloribus recusandae incidunt reiciendis sequi, similique, sit inventore repellendus ipsam dignissimos voluptate?",
  },
];

export interface SmartPhonesData {
  _id: string;
  images: {
    cardSizeUrl: string;
    displayUrl: string;
    commentUrl: string;
    defaultUrl: string;
  };
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  reviews: {
    totalReviews: number;
    star: number;
  };
}

const smartPhones: SmartPhonesData[] = [
  {
    _id: '1',
    images: {
      cardSizeUrl:
        'https://i.pinimg.com/originals/8b/06/29/8b062905bcd44b0d9164b46cc309a251.jpg',
      displayUrl:
        'https://i.pinimg.com/originals/8b/06/29/8b062905bcd44b0d9164b46cc309a251.jpg',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'iPhone 13 Pro',
    description:
      'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip.',
    price: 999,
    discountPrice: 899,
    reviews: {
      totalReviews: 1200,
      star: 4.7,
    },
  },
  {
    _id: '2',
    images: {
      cardSizeUrl:
        'https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?w=740&t=st=1693325365~exp=1693325965~hmac=c9b3279c6914514e75d77a938ce6bbf8a99b36be764c28707197b3314119c4f2',
      displayUrl:
        'https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?w=740&t=st=1693325365~exp=1693325965~hmac=c9b3279c6914514e75d77a938ce6bbf8a99b36be764c28707197b3314119c4f2',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Samsung Galaxy S22 Ultra',
    description:
      'Experience unparalleled features with the Samsung Galaxy S22 Ultra, including its impressive camera setup.',
    price: 1299,
    discountPrice: 1199,
    reviews: {
      totalReviews: 1500,
      star: 4.9,
    },
  },
  {
    _id: '3',
    images: {
      cardSizeUrl:
        'https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?w=740&t=st=1693325408~exp=1693326008~hmac=bac80f8ff800000c958d6669c5f75022a09b3aefdaec178d827c8265cdf68627',
      displayUrl:
        'https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?w=740&t=st=1693325408~exp=1693326008~hmac=bac80f8ff800000c958d6669c5f75022a09b3aefdaec178d827c8265cdf68627',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Google Pixel 6',
    description:
      'The Google Pixel 6 combines excellent photography capabilities with a pure Android experience.',
    price: 799,
    discountPrice: 699,
    reviews: {
      totalReviews: 800,
      star: 4.5,
    },
  },
  {
    _id: '4',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'OnePlus 9 Pro',
    description:
      'Experience speed and smoothness with the OnePlus 9 Pro powered by the Snapdragon 888.',
    price: 899,
    discountPrice: 799,
    reviews: {
      totalReviews: 900,
      star: 4.6,
    },
  },
  {
    _id: '5',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Xiaomi Mi 12',
    description:
      'The Xiaomi Mi 12 features a high-refresh-rate display and powerful hardware for a seamless experience.',
    price: 849,
    discountPrice: 749,
    reviews: {
      totalReviews: 1000,
      star: 4.4,
    },
  },
  {
    _id: '6',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Sony Xperia 1 III',
    description:
      'Enjoy exceptional multimedia capabilities with the Sony Xperia 1 III and its 4K display.',
    price: 1099,
    discountPrice: 999,
    reviews: {
      totalReviews: 700,
      star: 4.3,
    },
  },
  {
    _id: '7',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Huawei P50 Pro',
    description:
      'The Huawei P50 Pro boasts an exceptional camera system and elegant design.',
    price: 1199,
    discountPrice: 1099,
    reviews: {
      totalReviews: 850,
      star: 4.6,
    },
  },
  {
    _id: '8',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'LG Velvet 2',
    description:
      'Experience the LG Velvet 2 with its unique design and impressive multimedia features.',
    price: 799,
    discountPrice: 699,
    reviews: {
      totalReviews: 600,
      star: 4.2,
    },
  },
  {
    _id: '9',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Motorola Edge 20',
    description:
      'The Motorola Edge 20 offers a sleek design and impressive performance for its price.',
    price: 599,
    discountPrice: 549,
    reviews: {
      totalReviews: 500,
      star: 4.1,
    },
  },
  {
    _id: '10',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Oppo Find X4 Pro',
    description:
      'Discover the Oppo Find X4 Pro with its innovative features and powerful camera technology.',
    price: 1099,
    discountPrice: 999,
    reviews: {
      totalReviews: 950,
      star: 4.7,
    },
  },
  {
    _id: '11',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Vivo X70 Pro+',
    description:
      'The Vivo X70 Pro+ offers a blend of powerful hardware and photography capabilities.',
    price: 899,
    discountPrice: 799,
    reviews: {
      totalReviews: 800,
      star: 4.5,
    },
  },
  {
    _id: '12',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Realme GT Neo 2',
    description:
      'Experience flagship-level performance with the Realme GT Neo 2 and its Dimensity 1200 chip.',
    price: 599,
    discountPrice: 549,
    reviews: {
      totalReviews: 700,
      star: 4.3,
    },
  },
  {
    _id: '13',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Asus Zenfone 8',
    description:
      'The Asus Zenfone 8 offers a compact design without compromising on performance.',
    price: 699,
    discountPrice: 649,
    reviews: {
      totalReviews: 550,
      star: 4.4,
    },
  },
  {
    _id: '14',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Nokia X30',
    description:
      'The Nokia X30 comes with durable build quality and reliable performance.',
    price: 449,
    discountPrice: 399,
    reviews: {
      totalReviews: 400,
      star: 4.0,
    },
  },
  {
    _id: '15',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'Lenovo Legion Phone Duel 2',
    description:
      'For gaming enthusiasts, the Lenovo Legion Phone Duel 2 offers powerful hardware and gaming features.',
    price: 999,
    discountPrice: 899,
    reviews: {
      totalReviews: 600,
      star: 4.3,
    },
  },
  {
    _id: '16',
    images: {
      cardSizeUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      displayUrl:
        'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
      commentUrl: '',
      defaultUrl: '',
    },
    title: 'BlackBerry Key3',
    description:
      'The BlackBerry Key3 blends modern features with the iconic physical keyboard.',
    price: 699,
    discountPrice: 649,
    reviews: {
      totalReviews: 350,
      star: 4.1,
    },
  },
];

export default smartPhones;

interface CityProps {
  id: number;
  name: string;
}

interface DistrictProps {
  id: number;
  name: string;
  cities: CityProps[];
}

export interface ShippingAddressData {
  id: number;
  name: string;
  districts: DistrictProps[];
}

export default [
  {
    id: 1,
    name: 'Dhaka',
    districts: [
      {
        id: 101,
        name: 'Dhaka',
        cities: [
          {
            id: 8001,
            name: 'Dhaka Kotwali',
          },
          {
            id: 8002,
            name: 'Tejgaon',
          },
          {
            id: 8003,
            name: 'Gulshan',
          },
          {
            id: 8004,
            name: 'Banani',
          },
          {
            id: 8005,
            name: 'Paltan',
          },
        ],
      },
      {
        id: 102,
        name: 'Gazipur',
        cities: [
          {
            id: 9001,
            name: 'Gazipur Sadar',
          },
          {
            id: 9002,
            name: 'Tongi',
          },
          {
            id: 9003,
            name: 'Kaliakoir',
          },
          {
            id: 9004,
            name: 'Kaliganj',
          },
          {
            id: 9005,
            name: 'Sreepur',
          },
        ],
      },
      {
        id: 103,
        name: 'Tongi',
        cities: [
          {
            id: 10001,
            name: 'Tongi Thana',
          },
        ],
      },
      {
        id: 104,
        name: 'Tangail',
        cities: [
          {
            id: 11001,
            name: 'Tangail Sadar',
          },
          {
            id: 11002,
            name: 'Kalihati',
          },
          {
            id: 11003,
            name: 'Ghatail',
          },
          {
            id: 11004,
            name: 'Mirzapur',
          },
          {
            id: 11005,
            name: 'Nagarpur',
          },
        ],
      },
      {
        id: 105,
        name: 'Mymensingh',
        cities: [
          {
            id: 12001,
            name: 'Mymensingh Sadar',
          },
          {
            id: 12002,
            name: 'Bhaluka',
          },
          {
            id: 12003,
            name: 'Trishal',
          },
          {
            id: 12004,
            name: 'Muktagacha',
          },
          {
            id: 12005,
            name: 'Nandail',
          },
        ],
      },
      {
        id: 106,
        name: 'Narsingdi',
        cities: [
          {
            id: 13001,
            name: 'Narsingdi Sadar',
          },
          {
            id: 13002,
            name: 'Belabo',
          },
          {
            id: 13003,
            name: 'Monohardi',
          },
          {
            id: 13004,
            name: 'Raipura',
          },
          {
            id: 13005,
            name: 'Shibpur',
          },
        ],
      },
      {
        id: 107,
        name: 'Faridpur',
        cities: [
          {
            id: 14001,
            name: 'Faridpur Sadar',
          },
          {
            id: 14002,
            name: 'Alfadanga',
          },
          {
            id: 14003,
            name: 'Bhanga',
          },
          {
            id: 14004,
            name: 'Boalmari',
          },
          {
            id: 14005,
            name: 'Charbhadrasan',
          },
        ],
      },
      {
        id: 108,
        name: 'Kishoreganj',
        cities: [
          {
            id: 62001,
            name: 'Kishoreganj Sadar',
          },
          {
            id: 62002,
            name: 'Austagram',
          },
          {
            id: 62003,
            name: 'Katiadi',
          },
          {
            id: 62004,
            name: 'Karimganj',
          },
          {
            id: 62005,
            name: 'Mithamain',
          },
          {
            id: 62006,
            name: 'Kuliarchar',
          },
          {
            id: 62007,
            name: 'Hossainpur',
          },
          {
            id: 62008,
            name: 'Bhairab',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Chittagong',
    districts: [
      {
        id: 201,
        name: 'Chittagong',
        cities: [
          {
            id: 15001,
            name: 'Chittagong Kotwali',
          },
          {
            id: 15002,
            name: 'Chandgaon',
          },
          {
            id: 15003,
            name: 'Pahartali',
          },
          {
            id: 15004,
            name: 'Double Mooring',
          },
          {
            id: 15005,
            name: 'Kotwali',
          },
        ],
      },
      {
        id: 202,
        name: "Cox's Bazar",
        cities: [
          {
            id: 16001,
            name: "Cox's Bazar Sadar",
          },
          {
            id: 16002,
            name: 'Chakaria',
          },
          {
            id: 16003,
            name: 'Ukhia',
          },
          {
            id: 16004,
            name: 'Teknaf',
          },
          {
            id: 16005,
            name: 'Ramu',
          },
        ],
      },
      {
        id: 203,
        name: 'Bandarban',
        cities: [
          {
            id: 17001,
            name: 'Bandarban Sadar',
          },
          {
            id: 17002,
            name: 'Ruma',
          },
          {
            id: 17003,
            name: 'Thanchi',
          },
          {
            id: 17004,
            name: 'Rangamati',
          },
          {
            id: 17005,
            name: 'Lama',
          },
        ],
      },
      {
        id: 204,
        name: 'Khagrachari',
        cities: [
          {
            id: 18001,
            name: 'Khagrachari Sadar',
          },
          {
            id: 18002,
            name: 'Dighinala',
          },
          {
            id: 18003,
            name: 'Panchhari',
          },
          {
            id: 18004,
            name: 'Laxmichhari',
          },
          {
            id: 18005,
            name: 'Mahalchhari',
          },
        ],
      },
      {
        id: 205,
        name: 'Rangamati',
        cities: [
          {
            id: 19001,
            name: 'Rangamati Sadar',
          },
          {
            id: 19002,
            name: 'Kaptai',
          },
          {
            id: 19003,
            name: 'Jurai',
          },
          {
            id: 19004,
            name: 'Bilaichhari',
          },
          {
            id: 19005,
            name: 'Naniarchar',
          },
        ],
      },
      {
        id: 206,
        name: 'Feni',
        cities: [
          {
            id: 20001,
            name: 'Feni Sadar',
          },
          {
            id: 20002,
            name: 'Daganbhuiyan',
          },
          {
            id: 20003,
            name: 'Chagalnaiya',
          },
          {
            id: 20004,
            name: 'Sonagazi',
          },
          {
            id: 20005,
            name: 'Fulgazi',
          },
        ],
      },
      {
        id: 207,
        name: 'Noakhali',
        cities: [
          {
            id: 21001,
            name: 'Noakhali Sadar',
          },
          {
            id: 21002,
            name: 'Begumganj',
          },
          {
            id: 21003,
            name: 'Chatkhil',
          },
          {
            id: 21004,
            name: 'Companiganj',
          },
          {
            id: 21005,
            name: 'Senbagh',
          },
        ],
      },
      {
        id: 208,
        name: 'Lakshmipur',
        cities: [
          {
            id: 22001,
            name: 'Lakshmipur Sadar',
          },
          {
            id: 22002,
            name: 'Raipur',
          },
          {
            id: 22003,
            name: 'Ramganj',
          },
          {
            id: 22004,
            name: 'Kamalnagar',
          },
          {
            id: 22005,
            name: 'Ramgati',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Rajshahi',
    districts: [
      {
        id: 301,
        name: 'Rajshahi',
        cities: [
          {
            id: 23001,
            name: 'Rajshahi Kotwali',
          },
          {
            id: 23002,
            name: 'Boalia',
          },
          {
            id: 23003,
            name: 'Motihar',
          },
          {
            id: 23004,
            name: 'Shah Makhdum',
          },
          {
            id: 23005,
            name: 'Tanore',
          },
        ],
      },
      {
        id: 302,
        name: 'Bogra',
        cities: [
          {
            id: 24001,
            name: 'Bogra Sadar',
          },
          {
            id: 24002,
            name: 'Shajahanpur',
          },
          {
            id: 24003,
            name: 'Kahalu',
          },
          {
            id: 24004,
            name: 'Sariakandi',
          },
          {
            id: 24005,
            name: 'Adamdighi',
          },
        ],
      },
      {
        id: 303,
        name: 'Pabna',
        cities: [
          {
            id: 25001,
            name: 'Pabna Sadar',
          },
          {
            id: 25002,
            name: 'Ishwardi',
          },
          {
            id: 25003,
            name: 'Bera',
          },
          {
            id: 25004,
            name: 'Atghoria',
          },
        ],
      },
      {
        id: 304,
        name: 'Natore',
        cities: [
          {
            id: 26001,
            name: 'Natore Sadar',
          },
          {
            id: 26002,
            name: 'Baraigram',
          },
          {
            id: 26003,
            name: 'Lalpur',
          },
          {
            id: 26004,
            name: 'Bagatipara',
          },
        ],
      },
      {
        id: 305,
        name: 'Joypurhat',
        cities: [
          {
            id: 27001,
            name: 'Joypurhat Sadar',
          },
          {
            id: 27002,
            name: 'Akkelpur',
          },
          {
            id: 27003,
            name: 'Khetlal',
          },
          {
            id: 27004,
            name: 'Panchbibi',
          },
        ],
      },
      {
        id: 306,
        name: 'Chapai Nawabganj',
        cities: [
          {
            id: 28001,
            name: 'Chapai Nawabganj Sadar',
          },
          {
            id: 28002,
            name: 'Shibganj',
          },
          {
            id: 28003,
            name: 'Nachole',
          },
          {
            id: 28004,
            name: 'Bholahat',
          },
        ],
      },
      {
        id: 307,
        name: 'Naogaon',
        cities: [
          {
            id: 29001,
            name: 'Naogaon Sadar',
          },
          {
            id: 29002,
            name: 'Porsha',
          },
          {
            id: 29003,
            name: 'Badalgachhi',
          },
          {
            id: 29004,
            name: 'Manda',
          },
        ],
      },
      {
        id: 308,
        name: 'Sirajganj',
        cities: [
          {
            id: 30001,
            name: 'Sirajganj Sadar',
          },
          {
            id: 30002,
            name: 'Kazipur',
          },
          {
            id: 30003,
            name: 'Shahjadpur',
          },
          {
            id: 30004,
            name: 'Belkuchi',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Khulna',
    districts: [
      {
        id: 401,
        name: 'Khulna',
        cities: [
          {
            id: 31001,
            name: 'Khulna Kotwali',
          },
          {
            id: 31002,
            name: 'Sonnadanga',
          },
          {
            id: 31003,
            name: 'Daulatpur',
          },
          {
            id: 31004,
            name: 'Khalishpur',
          },
        ],
      },
      {
        id: 402,
        name: 'Jessore',
        cities: [
          {
            id: 32001,
            name: 'Jessore Kotwali',
          },
          {
            id: 32002,
            name: 'Jhikargachha',
          },
          {
            id: 32003,
            name: 'Manirampur',
          },
          {
            id: 32004,
            name: 'Abhaynagar',
          },
        ],
      },
      {
        id: 403,
        name: 'Satkhira',
        cities: [
          {
            id: 33001,
            name: 'Satkhira Sadar',
          },
          {
            id: 33002,
            name: 'Tala',
          },
          {
            id: 33003,
            name: 'Kalaroa',
          },
          {
            id: 33004,
            name: 'Shyamnagar',
          },
        ],
      },
      {
        id: 404,
        name: 'Bagerhat',
        cities: [
          {
            id: 34001,
            name: 'Bagerhat Sadar',
          },
          {
            id: 34002,
            name: 'Mollahat',
          },
          {
            id: 34003,
            name: 'Chitalmari',
          },
          {
            id: 34004,
            name: 'Fakirhat',
          },
        ],
      },
      {
        id: 405,
        name: 'Magura',
        cities: [
          {
            id: 35001,
            name: 'Magura Sadar',
          },
          {
            id: 35002,
            name: 'Sreepur',
          },
          {
            id: 35003,
            name: 'Mohammadpur',
          },
          {
            id: 35004,
            name: 'Shalikha',
          },
        ],
      },
      {
        id: 406,
        name: 'Chuadanga',
        cities: [
          {
            id: 36001,
            name: 'Chuadanga Sadar',
          },
          {
            id: 36002,
            name: 'Alamdanga',
          },
          {
            id: 36003,
            name: 'Damurhuda',
          },
          {
            id: 36004,
            name: 'Jibannagar',
          },
        ],
      },
      {
        id: 407,
        name: 'Meherpur',
        cities: [
          {
            id: 37001,
            name: 'Meherpur Sadar',
          },
          {
            id: 37002,
            name: 'Mujibnagar',
          },
        ],
      },
      {
        id: 408,
        name: 'Kushtia',
        cities: [
          {
            id: 38001,
            name: 'Kushtia Sadar',
          },
          {
            id: 38002,
            name: 'Kumarkhali',
          },
          {
            id: 38003,
            name: 'Mirpur',
          },
          {
            id: 38004,
            name: 'Daulatpur',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Barishal',
    districts: [
      {
        id: 501,
        name: 'Barishal',
        cities: [
          {
            id: 39001,
            name: 'Barishal Kotwali',
          },
          {
            id: 39002,
            name: 'Babuganj',
          },
          {
            id: 39003,
            name: 'Agailjhara',
          },
          {
            id: 39004,
            name: 'Bakerganj',
          },
        ],
      },
      {
        id: 502,
        name: 'Bhola',
        cities: [
          {
            id: 40001,
            name: 'Bhola Sadar',
          },
          {
            id: 40002,
            name: 'Borhanuddin',
          },
          {
            id: 40003,
            name: 'Charfasson',
          },
          {
            id: 40004,
            name: 'Daulatkhan',
          },
        ],
      },
      {
        id: 503,
        name: 'Patuakhali',
        cities: [
          {
            id: 41001,
            name: 'Patuakhali Sadar',
          },
          {
            id: 41002,
            name: 'Bauphal',
          },
          {
            id: 41003,
            name: 'Galachipa',
          },
          {
            id: 41004,
            name: 'Khepupara',
          },
        ],
      },
      {
        id: 504,
        name: 'Barguna',
        cities: [
          {
            id: 42001,
            name: 'Barguna Sadar',
          },
          {
            id: 42002,
            name: 'Amtali',
          },
          {
            id: 42003,
            name: 'Bamna',
          },
          {
            id: 42004,
            name: 'Betagi',
          },
        ],
      },
      {
        id: 505,
        name: 'Pirojpur',
        cities: [
          {
            id: 43001,
            name: 'Pirojpur Sadar',
          },
          {
            id: 43002,
            name: 'Bhandaria',
          },
          {
            id: 43003,
            name: 'Kawkhali',
          },
          {
            id: 43004,
            name: 'Mathbaria',
          },
        ],
      },
      {
        id: 506,
        name: 'Jhalokati',
        cities: [
          {
            id: 43001,
            name: 'Pirojpur Sadar',
          },
          {
            id: 43002,
            name: 'Bhandaria',
          },
          {
            id: 43003,
            name: 'Kawkhali',
          },
          {
            id: 43004,
            name: 'Mathbaria',
          },
        ],
      },
      {
        id: 507,
        name: 'Swarupkathi',
        cities: [
          {
            id: 45001,
            name: 'Swarupkathi Sadar',
          },
          {
            id: 45002,
            name: 'Barishal Sadar',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Sylhet',
    districts: [
      {
        id: 601,
        name: 'Sylhet',
        cities: [
          {
            id: 46001,
            name: 'Sylhet Sadar',
          },
          {
            id: 46002,
            name: 'Beanibazar',
          },
          {
            id: 46003,
            name: 'Bishwanath',
          },
          {
            id: 46004,
            name: 'Golapganj',
          },
        ],
      },
      {
        id: 602,
        name: 'Moulvibazar',
        cities: [
          {
            id: 47001,
            name: 'Moulvibazar Sadar',
          },
          {
            id: 47002,
            name: 'Srimangal',
          },
          {
            id: 47003,
            name: 'Kulaura',
          },
          {
            id: 47004,
            name: 'Rajnagar',
          },
        ],
      },
      {
        id: 603,
        name: 'Habiganj',
        cities: [
          {
            id: 48001,
            name: 'Habiganj Sadar',
          },
          {
            id: 48002,
            name: 'Lakhai',
          },
          {
            id: 48003,
            name: 'Nabiganj',
          },
          {
            id: 48004,
            name: 'Ajmiriganj',
          },
        ],
      },
      {
        id: 604,
        name: 'Sunamganj',
        cities: [
          {
            id: 49001,
            name: 'Sunamganj Sadar',
          },
          {
            id: 49002,
            name: 'Derai',
          },
          {
            id: 49003,
            name: 'Dharmapasha',
          },
          {
            id: 49004,
            name: 'Jamalganj',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Rangpur',
    districts: [
      {
        id: 701,
        name: 'Rangpur',
        cities: [
          {
            id: 50001,
            name: 'Rangpur Kotwali',
          },
          {
            id: 50002,
            name: 'Begumganj',
          },
          {
            id: 50003,
            name: 'Mithapukur',
          },
          {
            id: 50004,
            name: 'Pirganj',
          },
        ],
      },
      {
        id: 702,
        name: 'Dinajpur',
        cities: [
          {
            id: 51001,
            name: 'Dinajpur Sadar',
          },
          {
            id: 51002,
            name: 'Birampur',
          },
          {
            id: 51003,
            name: 'Bochaganj',
          },
          {
            id: 51004,
            name: 'Kaharole',
          },
        ],
      },
      {
        id: 703,
        name: 'Thakurgaon',
        cities: [
          {
            id: 52001,
            name: 'Thakurgaon Sadar',
          },
          {
            id: 52002,
            name: 'Pirganj',
          },
          {
            id: 52003,
            name: 'Ranisankail',
          },
          {
            id: 52004,
            name: 'Haripur',
          },
        ],
      },
      {
        id: 704,
        name: 'Panchagarh',
        cities: [
          {
            id: 53001,
            name: 'Panchagarh Sadar',
          },
          {
            id: 53002,
            name: 'Atwari',
          },
          {
            id: 53003,
            name: 'Boda',
          },
          {
            id: 53004,
            name: 'Debiganj',
          },
        ],
      },
      {
        id: 705,
        name: 'Kurigram',
        cities: [
          {
            id: 54001,
            name: 'Kurigram Sadar',
          },
          {
            id: 54002,
            name: 'Bhurungamari',
          },
          {
            id: 54003,
            name: 'Chilmari',
          },
          {
            id: 54004,
            name: 'Rajarhat',
          },
        ],
      },
      {
        id: 706,
        name: 'Lalmonirhat',
        cities: [
          {
            id: 55001,
            name: 'Lalmonirhat Sadar',
          },
          {
            id: 55002,
            name: 'Aditmari',
          },
          {
            id: 55003,
            name: 'Hatibandha',
          },
          {
            id: 55004,
            name: 'Kaliganj',
          },
        ],
      },
      {
        id: 707,
        name: 'Nilphamari',
        cities: [
          {
            id: 55001,
            name: 'Lalmonirhat Sadar',
          },
          {
            id: 55002,
            name: 'Aditmari',
          },
          {
            id: 55003,
            name: 'Hatibandha',
          },
          {
            id: 55004,
            name: 'Kaliganj',
          },
        ],
      },
      {
        id: 708,
        name: 'Gaibandha',
        cities: [
          {
            id: 57001,
            name: 'Gaibandha Sadar',
          },
          {
            id: 57002,
            name: 'Gobindaganj',
          },
          {
            id: 57003,
            name: 'Sundarganj',
          },
          {
            id: 57004,
            name: 'Palashbari',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Mymensingh',
    districts: [
      {
        id: 801,
        name: 'Mymensingh',
        cities: [
          {
            id: 58001,
            name: 'Mymensingh Sadar',
          },
          {
            id: 58002,
            name: 'Bhaluka',
          },
          {
            id: 58003,
            name: 'Gafargaon',
          },
          {
            id: 58004,
            name: 'Ishwarganj',
          },
        ],
      },
      {
        id: 802,
        name: 'Jamalpur',
        cities: [
          {
            id: 59001,
            name: 'Jamalpur Sadar',
          },
          {
            id: 59002,
            name: 'Bakshiganj',
          },
          {
            id: 59003,
            name: 'Dewanganj',
          },
          {
            id: 59004,
            name: 'Islampur',
          },
        ],
      },
      {
        id: 803,
        name: 'Netrokona',
        cities: [
          {
            id: 60001,
            name: 'Netrokona Sadar',
          },
          {
            id: 60002,
            name: 'Atpara',
          },
          {
            id: 60003,
            name: 'Khaliajuri',
          },
          {
            id: 60004,
            name: 'Mohanganj',
          },
        ],
      },
      {
        id: 804,
        name: 'Sherpur',
        cities: [
          {
            id: 61001,
            name: 'Sherpur Sadar',
          },
          {
            id: 61002,
            name: 'Nakla',
          },
          {
            id: 61003,
            name: 'Jhenaigati',
          },
          {
            id: 61004,
            name: 'Sreebardi',
          },
        ],
      },
    ],
  },
] as ShippingAddressData[];

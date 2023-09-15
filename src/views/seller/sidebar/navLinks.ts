import { PATH_SELLER } from '@/utils/routes';
import { IconType } from 'react-icons';
import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineShop,
} from 'react-icons/ai';
import { MdOutlineCategory, MdOutlineManageSearch } from 'react-icons/md';

// SIDEBAR ACTION LIST
type LinkType = 'list' | 'link' | 'handle';
export interface SellerSidebarActionList {
  id: number;
  Icon: IconType;
  type: LinkType;
  text: string;
  child:
    | []
    | Array<{
        id: number;
        text: string;
        link: string;
        type: LinkType;
      }>;
  link: string;
  height?: string;
  isExpend?: boolean;
  searchText: string;
}

//-----------------------------------

//-----------------------------------
const rootSearchTag = {
  searchTag: '/dashboard',
};
const navLinks: SellerSidebarActionList[] = [
  //
  {
    id: 1,
    Icon: AiOutlineDashboard,
    type: 'link',
    text: 'Dashboard',
    child: [],
    link: PATH_SELLER.overview,
    searchText: `${(rootSearchTag.searchTag, PATH_SELLER.overview)}`,
  },

  //
  {
    id: 2,
    Icon: AiOutlineShop,
    type: 'list',
    text: 'Product',
    child: [
      {
        id: 1,
        text: 'Manage Products',
        link: PATH_SELLER.products.manage,
        type: 'link',
      },
      {
        id: 2,
        text: 'Add New Products',
        link: PATH_SELLER.products.new,
        type: 'link',
      },
    ],
    link: 'products',
    height: 'h-[80px]',
    isExpend: false,
    searchText: `${
      (rootSearchTag.searchTag,
      PATH_SELLER.products.manage,
      PATH_SELLER.products.new)
    }`,
  },

  //
  {
    id: 3,
    Icon: MdOutlineCategory,
    type: 'link',
    text: 'All Category',
    child: [],
    link: PATH_SELLER.category,
    searchText: `${(rootSearchTag.searchTag, PATH_SELLER.category)}`,
  },
  //
  {
    id: 4,
    Icon: MdOutlineManageSearch,
    type: 'link',
    text: 'Manage Order',
    child: [],
    link: PATH_SELLER.orders,
    searchText: `${(rootSearchTag.searchTag, PATH_SELLER.orders)}`,
  },

  {
    id: 14,
    Icon: AiOutlineMessage,
    type: 'link',
    text: 'Account & Settings',
    child: [],
    link: PATH_SELLER.accountAndSettings,
    searchText: `${(rootSearchTag.searchTag, PATH_SELLER.accountAndSettings)}`,
  },
];

export default navLinks;

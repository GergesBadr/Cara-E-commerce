import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import articleOneImg from "../assets/articles/article-1.jpg";
import articleTwoImg from "../assets/articles/article-2.jpg";
import articleThreeImg from "../assets/articles/article-3.jpg";
import articleFourImg from "../assets/articles/article-4.jpg";
import articleFiveImg from "../assets/articles/article-5.jpg";

import freeShipping from "../assets/features/free-shipping.png";
import onlineOrder from "../assets/features/online-order.png";
import saveMoney from "../assets/features/save-money.png";
import promotions from "../assets/features/promotions.png";
import happySell from "../assets/features/happy-sell.png";
import support from "../assets/features/support.png";

// Header
export const NAV_LINKS = [
  { name: "Home", to: "/home" },
  { name: "Shop", to: "/shop" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
  { name: "Cart", to: "/cart" },
];

// Features
export const FEATURES_LIST_INFO = [
  {
    image: freeShipping,
    imageAlt: "Hand clicking in mobile phone, illustration.",
    title: "Free Shipping",
    bgColor: "bg-[#fddde4]",
    key: 1,
  },
  {
    image: onlineOrder,
    imageAlt: "Young man running to deliver an order, illustration.",
    title: "Online Order",
    bgColor: "bg-[#cdebbc]",
    key: 2,
  },
  {
    image: saveMoney,
    imageAlt: "Hand putting money in Piggy Bank, illustration.",
    title: "Save Money",
    bgColor: "bg-[#d1e8f2]",
    key: 3,
  },
  {
    image: promotions,
    imageAlt: "Young lady happy and holding a promotion gift, illustration.",
    title: "Promotions",
    bgColor: "bg-[#cdd4f8]",
    key: 4,
  },
  {
    image: happySell,
    imageAlt: "Two people clapping each other hands, illustration.",
    title: "Happy Sell",
    bgColor: "bg-[#f6dbf6]",
    key: 5,
  },
  {
    image: support,
    imageAlt: "Customer service lady speaking in phone, illustration.",
    title: "F24/7 Support",
    bgColor: "bg-[#fff2e5]",
    key: 6,
  },
];

// Shop
export const PRODUCTS_PER_PAGE = 12;

// Blog page
export const ARTICLES = [
  {
    id: 1,
    title: "The cotton - Jersey zip-Up hoodie",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas deleniti deserunt veritatis dolorem eos molestiae quidem, eum,
      enim expedita magni unde mollitia maiores magnam placeat blanditiis. Quaerat hic temporibus corrupti quasi porro voluptatibus,
      corporis placeat beatae!`,
    date: "7/03",
    imageSrc: articleOneImg,
    imageAlt: "Woman's back, half face appear, her dress is zipped-up.",
  },
  {
    id: 2,
    title: "How to style a Quiff?",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas deleniti deserunt veritatis dolorem eos molestiae quidem, eum,
      enim expedita magni unde mollitia maiores magnam placeat blanditiis. Quaerat hic temporibus corrupti quasi porro voluptatibus,
      corporis placeat beatae minima enim sapiente soluta repudiandae officiis impedit dolor nobis sunt accusantium sequi eum vitae.`,
    date: "13/04",
    imageSrc: articleTwoImg,
    imageAlt: "Two womens standing, showing their quiff hearcut.",
  },
  {
    id: 3,
    title: "Must-have skater girl items",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed aut laboriosam culpa sunt cum iure tempora blanditiis nesciunt eos ut voluptatibus labore,
    consectetur, aliquam doloribus placeat minima. Voluptatum, pariatur natus aperiam temporibus repellendus, eligendi ullam, aspernatur minima aliquid laudantium a?`,
    date: "12/01",
    imageSrc: articleThreeImg,
    imageAlt: "Room full of clothes, organised.",
  },
  {
    id: 4,
    title: "Runway-inspired trends",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio aspernatur quia magni, corrupti iusto vero asperiores odit atque
    neque nemo mollitia minima nostrum sit maiores quidem tempore quaerat? Fugit necessitatibus, incidunt blanditiis laudantium consequatur quod adipisci ad
    laboriosam! Molestiae, ullam illo unde mollitia necessitatibus in fugiat ipsam suscipit enim, dolores veritatis quae voluptates quisquam asperiores hic, reiciendis
    a aliquid atque labore consequuntur! Dolores, voluptatibus!`,
    date: "16/01",
    imageSrc: articleFourImg,
    imageAlt: "Two women standing.",
  },
  {
    id: 5,
    title: "Aw20 menswear trends",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem distinctio eum repellendus consequuntur quasi quia,
    repudiandae, rerum et adipisci saepe dignissimos officiis iusto perspiciatis nisi incidunt ratione similique possimus!`,
    date: "10/03",
    imageSrc: articleFiveImg,
    imageAlt: "Yellow background, has a cup of coffee and a hand holding it.",
  },
];

// Footer data
export const CONTACT_LIST = [
  {
    contactKey: "Address",
    value: "562 Wellingtion Road, California.",
  },
  { contactKey: "Phone", value: "+0123456789 (+91)" },
  { contactKey: "Hours", value: "10:00 - 18:00, Mon - Sat" },
];

export const ABOUT_LIST = [
  { content: "About us", to: "/coming-soon" },
  { content: "Delivery information", to: "/coming-soon" },
  { content: "Privacy Policy", to: "/coming-soon" },
  { content: "Terms & Conditions", to: "/coming-soon" },
  { content: "Contact Us", to: "/contact" },
];

export const ACCOUNT_LIST = [
  { content: "Sign in", to: "/coming-soon" },
  { content: "View Cart", to: "/cart" },
  { content: "My Wishlist", to: "/coming-soon" },
  { content: "Track My Order", to: "/coming-soon" },
  { content: "Help", to: "/contact" },
];

export const FOLLOW_US_LIST = [
  { name: "Facebook", icon: <FaFacebookF className="h-6 w-6" /> },
  { name: "Twitter", icon: <FaTwitter className="h-6 w-6" /> },
  { name: "Pinterest", icon: <FaPinterest className="h-6 w-6" /> },
  { name: "Youtube", icon: <FaYoutube className="h-6 w-6" /> },
  { name: "Instagram", icon: <FaInstagram className="h-6 w-6" /> },
];

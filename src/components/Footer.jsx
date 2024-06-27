import { Link } from "react-router-dom";
import {
  ABOUT_LIST,
  ACCOUNT_LIST,
  CONTACT_LIST,
  FOLLOW_US_LIST,
} from "../utils/constants";
import { useRef } from "react";

function Footer() {
  const footerRef = useRef();

  return (
    <footer className="relative mt-[100px] bg-teal-700 text-white lg:mt-[200px]">
      <div
        ref={footerRef}
        className="responsive-container relative grid divide-y-2 divide-gray-400 overflow-hidden py-14 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 md:grid-cols-3 lg:grid-cols-4 [&>ul]:py-4 [&>ul]:sm:py-0 "
      >
        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">Contact</p>
          </li>
          {CONTACT_LIST.map((item) => {
            return (
              <li key={item.contactKey} className="mb-2">
                <span className="mb-1 block font-medium">
                  {item.contactKey}:
                </span>
                <p className="text-sm text-gray-200">{item.value}</p>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">About</p>
          </li>
          {ABOUT_LIST.map((item) => {
            return (
              <li key={item.content}>
                <Link
                  to={item.to}
                  className="mb-2 block text-lg text-gray-200 "
                >
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">
              My Account
            </p>
          </li>
          {ACCOUNT_LIST.map((item) => {
            return (
              <li key={item.content}>
                <Link to={item.to} className="mb-2 block text-lg text-gray-200">
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">Follow Us</p>
          </li>
          {FOLLOW_US_LIST.map((item) => {
            return (
              <li key={item.name}>
                <a href="#" className="mb-2 flex items-center gap-2 py-2 ">
                  {item.icon}
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

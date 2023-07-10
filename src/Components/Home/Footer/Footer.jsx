import React from "react";

const Footer = () => {
  return (
    <div className="my-8">
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <img src="/Asset/logo-v6.png" alt="" />
          <p className="font-bold">
            Job Board Technology Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title font-bold text-2xl text-[#130f40]">
            Services
          </span>
          <a className="link link-hover font-medium text-[18px] my-2">
            All Jobs
          </a>
          <a className="link link-hover font-medium text-[18px] my-2">
            All Categories
          </a>
          <a className="link link-hover font-medium text-[18px] my-2">
            Companies
          </a>
          <a className="link link-hover font-medium text-[18px] my-2">
            My Account
          </a>
        </div>
        <div>
          <span className="footer-title font-bold text-2xl text-[#130f40]">
            Company
          </span>
          <a className="link link-hover font-medium text-[18px] my-2">
            About us
          </a>
          <a className="link link-hover font-medium text-[18px] my-2">
            Contact
          </a>
          <a className="link link-hover font-medium text-[18px] my-2">Jobs</a>
          <a className="link link-hover font-medium text-[18px] my-2">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title font-bold text-2xl text-[#130f40]">
            Legal
          </span>
          <a className="link link-hover font-semibold text-[18px] my-2">
            Terms of use
          </a>
          <a className="link link-hover font-semibold text-[18px] my-2">
            Privacy policy
          </a>
          <a className="link link-hover font-semibold text-[18px] my-2">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

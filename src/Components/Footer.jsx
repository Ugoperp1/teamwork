import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <div className="lg:grid grid-cols-4 gap-4 bg-[#e0e0e05f] p-10 justify-content-center">

        <div className=" mb-8">
          <h3 className="text-2xl text-indigo-900 mb-2">
            <b>Information for</b>
          </h3>
          <ul className="mt-5">
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Prospective undergraduates</Link> </li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Prospective graduate students </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">businesses/Partnerships </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Visitors/Tourists </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Parliamentarians </Link></li>
          </ul>
        </div>

        <div className=" mb-8">
          <h3 className="text-2xl text-indigo-900 mb-2 ">
            <b>Quick Links</b>
          </h3>
          <ul className="mt-5">
            <li className="mb-2 text-gray-400 hover:text-gray-700" > <Link to="/about">Contact Searches </Link></li>
            <li className="mb-2 text-gray-400  hover:text-gray-700"> <Link to="/about">Job and Vacancies </Link></li>
            <li className="mb-2 text-gray-400  hover:text-gray-700"> <Link to="/about">University images </Link></li>
            <li className="mb-2 text-gray-400  hover:text-gray-700"> <Link to="/about">Privacy Policy </Link></li>
            <li className="mb-2 text-gray-400  hover:text-gray-700"> <Link to="/about">Terms and Conditions </Link></li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl text-indigo-900 mb-2 ">
            <b>Information About</b>
          </h3>
          <ul className="mt-5">
            <li className="mb-2 text-gray-400  hover:text-gray-700"> <Link to="/about">Strategic Plan </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Fees and Funding </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Museums and collections </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Statement on Mordern Slavery </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Data privacy/GDPR </Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-indigo-900 mb-2 ">
            <b>Security Brand</b>
          </h3>
          <ul className="mt-5">
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Privacy Statement</Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Report Copyright Infringement </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Report Security Issue </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Trademark Notice </Link></li>
            <li className="mb-2  text-gray-400 hover:text-gray-700"> <Link to="/about">Access Control </Link></li>
          </ul><br></br>
        </div>
      </div>

      <footer className="md:flex-3 bg-[#fff] text-center p-7 text-gray-400" style={{ fontSize: '85%' }}>
        <p>
          COPYRIGHT©2019 <span className="text-red-500"> <a href="https://demo.themeies.com/elearning-react/">AI MOVEMENT ACADEMY.</a></span> ALL
          RIGHTS RESERVED.
        </p>
      </footer>
      
    </div>
  );
}

export default Footer;
import React from "react";
import Img from "gatsby-image";

const TeamMember = ({ index, member }) => (
  <div className="p-4 lg:w-1/2">
    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      {member && member.image && member.image.asset ? (
        <Img
          fluid={member.image.asset.fluid}
          loading="lazy"
          height="192"
          width="192"
          alt={member.name}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        />
      ) : (
        <img
          alt="team"
          height="192"
          width="192"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src="https://dummyimage.com/200x200"
        />
      )}
      <div className="flex-grow sm:pl-8">
        <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
        <h3 className="text-gray-500 mb-3">{member.role}</h3>
        <p className="mb-4">
          {member.email}
          <br />
          <span>
            <b>NMLS :</b>
            {member.nmls}
          </span>
          <br />
          {member.phone}
        </p>
        <span className="inline-flex">
          <a className="text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-2 text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-2 text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default TeamMember;

export const AltTeamMember = () => (

  <div className="max-w-md w-full lg:flex">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")'}} title="Woman holding a mug">
    </div>
    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-grey-dark flex items-center">
          <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
        <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
        <div className="text-sm">
          <p className="text-black leading-none">Jonathan Reinink</p>
          <p className="text-grey-dark">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
);
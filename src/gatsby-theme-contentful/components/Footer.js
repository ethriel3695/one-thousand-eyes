import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitterSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useExternalLinks } from 'gatsby-theme-contentful/src/hooks/externalLinks';
import { useSiteMetadata } from 'gatsby-theme-contentful/src/hooks/siteMetadata';
import { useSocialInfo } from 'gatsby-theme-contentful/src/hooks/socialInfo';

export default function Footer() {
  const { copyright } = useSiteMetadata();
  const { email, facebook, twitter, github } = useSocialInfo();
  const links = useExternalLinks();
  let social = [];
  let SocialContainer = null;
  if (facebook !== '') {
    social.push({ icon: faFacebook, link: facebook });
  }
  if (twitter !== '') {
    social.push({ icon: faTwitterSquare, link: twitter });
  }
  if (github !== '') {
    social.push({ icon: faGithub, link: github });
  }
  if (email !== '') {
    social.push({ icon: faEnvelope, link: email });
  }

  if (social.length > 0) {
    SocialContainer = (
      <div className="flex justify-center">
        <div className="flex text-center justify-between">
          {social.map((soc, index) => (
            <a
              key={index}
              href={`${soc.link}/`}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'm-4 text-blue-700 no-underline text-3xl hover:text-blue-800'
              }
            >
              <FontAwesomeIcon
                icon={soc.icon}
                className={'fontAwesomeFooterIcon'}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <footer className="mt-12">
      <div>
        {links.map((link, index) => (
          <div key={`container-${index}`} className="text-center">
            <a
              key={index}
              href={`${link.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'm-4 text-xl text-blue-700 no-underline hover:text-blue-800'
              }
            >
              {`${link.label}`}
            </a>
          </div>
        ))}
      </div>
      {SocialContainer}
      <div>
        <div>
          <div className="text-center p-5">{copyright} </div>
        </div>
      </div>
    </footer>
  );
}
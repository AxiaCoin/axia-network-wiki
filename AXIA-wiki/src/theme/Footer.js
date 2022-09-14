import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Logo from "@site/static/img/AXIA-blue-logo.svg";

function FooterNavColumn({ headline, children }) {
  return (
    <Col xs={6} md={3} className="mb-3 mb-md-0">
      <h5 className="text-white">{headline}</h5>
      <ul className="list-unstyled">{children}</ul>
    </Col>
  );
}

function FooterSocialColumn() {
  const SocialItem = ({ href, className }) => {
    return (
      <li className="text-white">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i className={className} />
        </a>
      </li>
    );
  };

  const Social = () => (
    <ul className="list-social-links justify-content-around">
    
    </ul>
  );

  const Newsletter = () => (
    <>
    </>
  );

  return (
    <Col md={3} className="px-lg-0">
    </Col>
  );
}

function FooterLegalLink({ href, content }) {
  return (
    <li>
      <a
        href={href}
        className="text-white text-small"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </li>
  );
}

function FooterLink({ href, content }) {
  return (
    <li className="py-0 py-md-1">
      <a
        href={href}
        className="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </li>
  );
}

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const { footer } = siteConfig.themeConfig;

  return (
    <footer className="nav-footer spacer-y-4 pb-4" id="footer">
      <center><a href="https://wiki.axiacoin.network">&copy; 2022 AXIA Systems</a></center>
    </footer>
  );
}

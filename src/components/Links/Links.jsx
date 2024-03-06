import React from "react";
import { Line, LinksWrapper } from "./Links.styled";

const Links = () => {
  return (
    <LinksWrapper>
      <Line></Line>
      <a
        href="https://t.me/vidnovlennyavolossya"
        rel="noopener noreferrer"
        target="_blank"
      >
        Telegram
      </a>
      <a
        href="https://www.instagram.com/vidnovlennyavolossya/?igshid=MzRlODBiNWFlZA%3D%3D"
        rel="noopener noreferrer"
        target="_blank"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/Vidnovlennyavolossya"
        rel="noopener noreferrer"
        target="_blank"
      >
        Facebook
      </a>
    </LinksWrapper>
  );
};

export default Links;

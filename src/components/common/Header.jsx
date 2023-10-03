import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <img
        className="logoImg"
        src="/assets/images/logo_white.svg"
        alt="logoImg"
      />
      <nav>
        <Link to="/" className="menu">
          홈
        </Link>
        <Link to="/mypage" className="menu">
          마이페이지
        </Link>
        <Link to="/setting" className="menu">
          설정
        </Link>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
  height: 40px;
  padding: 10px;
  display: flex;
  background-color: #7749f8;
  align-items: center;

  .logoImg {
    margin: 20px;
  }

  .menu {
    margin: 16px;
    color: #e9ecef;
    text-decoration: none;
    flex: 1;
    text-align: center;
  }
`;

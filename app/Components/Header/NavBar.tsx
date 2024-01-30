"use client"
// components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../public/images/pen-logo.png';
import Link from 'next/link';
import Button from '../Button/Button';
import { FaWallet } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";


const NavbarStyled = styled.nav`
  padding: 0 4rem;
  min-height: 10vh;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .input {
    flex: 2;
    display: flex;
    justify-content: center;

    input {
      width: 55%;
      padding: 0.6rem 0.8rem;
      border-radius: 8px;
      background-color: #191919;
      border: 1px solid var(--color-border);

      &::placeholder {
        color: var(--color-border);
        font-weight: 500;
      }
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      transition: all 0.2s ease-in-out;

      &:hover {
        color: white;
        transform: scale(1.1);
      }
    }
  }
`;

const Navbar = () => {



  const { scrollYProgress } = useScroll({
    // target: video,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );




  return (
    <NavbarStyled>
      <div className="logo">
        <Image src={logo} alt="logo" width={36} />
        <h2>MaddyFX</h2>
      </div>
      <div className="input">
        <input type="text" placeholder="Search" />
      </div>
      <ul className="nav-items">
        <li>
          <Link href="/">
           Home
          </Link>
        </li>
        <li>
          <Link href="/about">
           About Me
          </Link>
        </li>
        <li>
          <Link href="/designs">
            Designs
          </Link>
        </li>
        <li>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link href="/offers">
            Offers
          </Link>
        </li>
        <Button name="Connect Wallet" icon={<FaWallet />} />
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

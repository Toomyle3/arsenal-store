import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        @2022 ARSENAL FOOTBAL CLUB DIRECT THE OFFICIAL ONLINE STORE
      </p>
      <p className="icons">
        <Link href="https://twitter.com/Arsenal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <AiOutlineTwitter style={{cursor:"pointer"}}/>
        </Link>
        <Link href='https://www.instagram.com/arsenal/'>
          <AiFillInstagram style={{cursor:"pointer"}}/>
        </Link>
        <Link href='https://www.youtube.com/channel/UCpryVRk_VDudG8SHXgWcG0w'>
          <AiFillYoutube style={{cursor:"pointer"}}/>
        </Link>
        <Link href='https://www.facebook.com/Arsenal'>
          <AiFillFacebook style={{cursor:"pointer"}}/>
        </Link>
      </p>
    </div>
  )
}

export default Footer

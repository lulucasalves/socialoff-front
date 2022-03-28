import { Logo } from '../Logo'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { LineDiv } from '../LineDiv'
import { ChooseLang } from '../ChooseLang'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import OnOutsiceClick from 'react-outclick'
import { Theme } from '../Theme'
import { Lang } from '../Lang'
import Link from 'next/link'

export function Navigation(props) {
  const [modal, setModal] = useState(false)

  return (
    <nav {...props} className="navigation">
      {props.width <= 1080 ? (
        <>
          <HiMenuAlt2
            onClick={() => {
              setModal(true)
            }}
          />
          <Logo />
        </>
      ) : (
        <>
          <div className="logoGroup">
            <HiMenuAlt2
              onClick={() => {
                setModal(true)
              }}
            />
            <Logo />
          </div>
          <div className="configs">
            <ChooseLang />
            <Theme />
          </div>
        </>
      )}

      {modal && (
        <div className="menu">
          <div className="menuContent">
            <OnOutsiceClick onOutsideClick={() => setModal(false)}>
              {props.width <= 1080 ? (
                <>
                  <IoMdClose
                    onClick={() => {
                      setModal(false)
                    }}
                  />
                  <div className="configs">
                    <Theme />
                    <ChooseLang />
                  </div>
                </>
              ) : (
                <div className="exitGroup">
                  <IoMdClose
                    onClick={() => {
                      setModal(false)
                    }}
                  />
                  <Logo />
                </div>
              )}
              <h3>
                <Lang>menu</Lang>
              </h3>
              <ul className="itemsList">
                <Link href="/instagram">
                  <li>
                    <FaInstagram />
                    Instagram
                  </li>
                </Link>
                <LineDiv />
                <Link href="/youtube">
                  <li>
                    <FaYoutube />
                    Youtube
                  </li>
                </Link>
                <LineDiv />
                <Link href="/linkedin">
                  <li>
                    <FaLinkedinIn />
                    Linkedin
                  </li>
                </Link>
                <LineDiv />
                <Link href="/tiktok">
                  <li>
                    <FaTiktok />
                    TikTok
                  </li>
                </Link>
                <LineDiv />
                <Link href="/facebook">
                  <li>
                    <FaFacebook />
                    Facebook
                  </li>
                </Link>
                <LineDiv />
                <Link href="/twitter">
                  <li>
                    <FaTwitter />
                    Twitter
                  </li>
                </Link>
              </ul>
            </OnOutsiceClick>
          </div>
        </div>
      )}
    </nav>
  )
}

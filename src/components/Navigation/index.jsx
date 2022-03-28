import { Logo } from '../Logo'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { LineDiv } from '../LineDiv'
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
          <div>
            <Theme />
          </div>
        </>
      )}

      {modal && (
        <div className="menu">
          <div className="menuContent">
            <OnOutsiceClick onOutsideClick={() => setModal(false)}>
              {props.width <= 1080 ? (
                <IoMdClose
                  onClick={() => {
                    setModal(false)
                  }}
                />
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
              <h3>Baixe conteúdos do:</h3>
              <ul className="itemsList">
                <li>
                  <FaInstagram />
                  Instagram
                </li>
                <LineDiv />
                <li>
                  <FaYoutube />
                  Youtube
                </li>
                <LineDiv />
                <li>
                  <FaLinkedinIn />
                  Linkedin
                </li>
                <LineDiv />
                <li>
                  <FaTiktok />
                  TikTok
                </li>
                <LineDiv />
                <li>
                  <FaFacebook />
                  Facebook
                </li>
                <LineDiv />
                <li>
                  <FaTwitter />
                  Twitter
                </li>
              </ul>
            </OnOutsiceClick>
          </div>
        </div>
      )}
    </nav>
  )
}

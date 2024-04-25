import { useRef, useState } from "react";

function Header() {
  // const [isToggleActive, setIsToggleActive] = useState<boolean>(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  // event: React.MouseEventHandler<HTMLDivElement>
  function handleToggle() {
    const isMenuToggled =
      toggleRef?.current?.classList.contains("active") &&
      navigationRef?.current?.classList.contains("active");

    if (isMenuToggled) {
      toggleRef?.current?.classList.remove("active");
      navigationRef?.current?.classList.remove("active");
    } else {
      toggleRef?.current?.classList.add("active");
      navigationRef?.current?.classList.add("active");
    }
  }
  return (
    <header>
      <div className='logo'>
        <a href='/'>
          <img id='logo' src='/images/icons/icon-512x512.png' alt='' />
        </a>
        <span>Rancko Solutions</span>
      </div>
      <div
        className='toggle'
        ref={toggleRef}
        onClick={() => handleToggle()}
      ></div>
      <div className='navigation' ref={navigationRef}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/services'>Services</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
        <div className='social-bar'>
          <ul>
            <li>
              <a href='https://facebook.com/ranckosolutions'>
                <img src='/images/facebook.png' alt='' />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/ranckosolutions'>
                <img src='/images/twitter.png' alt='' />
              </a>
            </li>
            <li>
              <a href='https://instagram.com/ranckosolutions'>
                <img src='/images/instagram.png' alt='' />
              </a>
            </li>
          </ul>
          <a href='mailto:info@ranckosolutions.com' className='email-icon'>
            <img src='/images/email.png' alt='' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

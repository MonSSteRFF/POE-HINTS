import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'simple-class-name';

import { Page, Pages } from '@/router/Pages';
import { useClickOutside } from '@/utils/useClickOutside';

import styles from './Header.module.scss';

const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside([menuRef, buttonRef], () => setIsActiveBurger(false));
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <button
          ref={buttonRef}
          className={cn(isActiveBurger ? [styles.burger, styles.active] : styles.burger)}
          onClick={() => setIsActiveBurger((prev) => !prev)}
        >
          <span className={styles.burger_item}></span>
          <span className={styles.burger_item}></span>
          <span className={styles.burger_item}></span>
        </button>

        <Link to={Page.Home} className={styles.header_title}>
          POE-HINTS
        </Link>

        <nav ref={menuRef} className={cn(isActiveBurger ? [styles.menu, styles.active] : styles.menu)}>
          <ul className={styles.menu_list}>
            {Pages.map((link, index) => (
              <li key={index} className={styles.menu_list_item}>
                <button
                  onClick={() => {
                    setIsActiveBurger(false);
                    navigate(link.route);
                  }}
                  className={cn(
                    pathname === link.route ? [styles.menu_list_item_link, styles.active] : styles.menu_list_item_link,
                  )}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

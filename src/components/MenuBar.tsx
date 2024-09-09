'use client';
import styled from '@emotion/styled';
import {menuList} from '@/constants/menuList';
import Link from 'next/link';
import {useState} from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MenuBar() {
  const depthLevel: number = 0;
  return (
    <Container>
      <ul className={'category-list'}>
        {menuList.map((menu, i) => (
          <RenderMenuList menu={menu} key={i} depthLevel={depthLevel} />
        ))}
      </ul>
    </Container>
  );
}

interface IMenu {
  title: string;
  url: string;
  submenu?: IMenu[];
}

const RenderMenuList = ({menu, depthLevel}: {menu: IMenu; depthLevel: number}) => {
  const [isShow, setShow] = useState(false);
  const isSubmenu = depthLevel > 0;

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return (
    <li
      className={`${isSubmenu ? 'menu-item' : 'category-item'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {menu.submenu && menu.submenu.length > 0 ? (
        <>
          <div className={'title-wrap'}>
            <span className={'title'}>{menu.title}</span>
            {isSubmenu && <KeyboardArrowRightIcon />}
          </div>
          <ul className={`menu-list ${isShow ? 'show' : ''} ${isSubmenu ? 'multiDepth' : ''}`}>
            {menu.submenu?.map((submenu, i) => (
              <RenderMenuList menu={submenu} key={i} depthLevel={depthLevel + 1} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={menu.url}>{menu.title}</Link>
      )}
    </li>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #7daee4;
  a {
    font-size: 1.4rem;
  }

  .category {
    &-list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem;
    }

    &-item {
      position: relative;
      cursor: pointer;
    }
  }

  .title-wrap {
    display: flex;
    align-items: center;
    .title {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .menu {
    &-list {
      display: none;
      list-style: none;
      position: absolute;
      top: auto;
      left: 0;
      flex-direction: column;
      gap: 0.5rem;
      z-index: 10;
      width: max-content;
      padding: 1rem 0;
      background: #fff;
      font-size: 1.6rem;
      box-shadow:
        0 10px 15px -3px rgba(46, 41, 51, 0.08),
        0 4px 6px -2px rgba(71, 63, 79, 0.16);

      &.show {
        display: flex;
      }
      &.multiDepth {
        top: -1rem;
        left: 100%;
      }
    }

    &-item {
      position: relative;
      height: 3.4rem;
      padding: 0.5rem 2rem;
      cursor: pointer;
      &:hover {
        background: #aaa;
      }
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;

const MenuContainer = styled('div')<{isOpen: boolean}>(({isOpen}) => ({
  display: isOpen ? 'block' : 'none',
}));

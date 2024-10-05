import { FunctionComponent } from 'react';
import { Nav, HeaderContainer, Logo } from './header.sc';
import { Container } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
interface HeaderItem {
  text: string;
  link: string;
}

const HEADER_ITEMS: HeaderItem[] = [
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Cheatsheet',
    link: '/cheatsheet',
  },
  {
    text: 'Diary',
    link: '/diary',
  },
];

export const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Nav>
      <Container maxW="90em">
        <div className="nav-container">
          <Link href="/">
            <Logo>
              <Image alt="" width={80} height={20} className="logo" src="/ghoster.png" />
              <span>ZOLABOO</span>
            </Logo>
          </Link>

          <ul>
            {HEADER_ITEMS.map((headerItem) => (
              <li key={headerItem.text}>
                <Link href={headerItem.link}>{headerItem.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Nav>
  </HeaderContainer>
);

import { FunctionComponent } from 'react';
import { Nav, HeaderContainer } from './header.sc';
import { Container } from '@chakra-ui/react';
import Link from 'next/link';

interface HeaderItem {
  text: string;
  link: string;
}

const HEADER_ITEMS: HeaderItem[] = [
  {
    text: 'BLOG',
    link: '/blog',
  },
  {
    text: 'CHEATSHEET',
    link: '/cheatsheet',
  },
];

export const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Nav>
      <Container maxW="90em">
        <div className="nav-container">
          <Link href="/">
            <img className="logo" src="/kali-linux.png" />
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

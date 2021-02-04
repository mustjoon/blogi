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
];

export const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Nav>
      <Container maxW="90em">
        <ul>
          {HEADER_ITEMS.map((headerItem) => (
            <li key={headerItem.text}>
              <Link href={headerItem.link}>{headerItem.text}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Nav>
  </HeaderContainer>
);

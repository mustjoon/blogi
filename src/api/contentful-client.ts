import { createClient } from 'contentful';
console.log(process.env);

console.log('MITÄ VITTUA');
export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

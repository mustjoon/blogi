// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '../../../lib/api/contentful-client';

export default async (req, res) => {
  const data = await client.getEntry(req.query.id);
  res.statusCode = 200;
  res.json(data);
};

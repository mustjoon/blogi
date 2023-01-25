// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getBlog } from 'lib/api/blog-service';

// Add this later https://kittygiraudel.com/2022/05/16/rate-limit-nextjs-api-routes/
export default async (req, res) => {
  if (req.method === 'GET') {
    const data = getBlog(req.query.id);
    res.statusCode = 200;
    res.json(data);
    return;
  }

  if (req.method === 'POST') {
    const password = req.body.password;
    try {
      const data = await getBlog(req.query.id, password);
      res.statusCode = 200;
      res.json(data);
    } catch (err) {
      res.statusCode = err.code || 500;
      res.json({ message: err.message || 'Something went wrong' });
    }
    return;
  }

  res.status(405).end(`Method Not Allowed`);
};

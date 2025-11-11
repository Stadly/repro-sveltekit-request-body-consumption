import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  console.log(await request.text());
  return new Response('ok');
};

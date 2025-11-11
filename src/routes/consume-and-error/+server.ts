import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  await request.arrayBuffer();
  error(500, 'Error after consuming body');
};

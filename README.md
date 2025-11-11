1. Run `npm i && npm run dev` to start development server.
2. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
3. Open the `Network` tab of DevTools to see the requests being made.
4. Click the `consume and error` button. The request to `/consume-and-error` will fail. Observe that the request to `/post` finishes quite quickly.
5. Click the `error` button. The request to `/error` will fail. Observe that the request to `/post` takes a long time to finish.

The only difference between the `/consume-and-error` and `/error` endpoints is that the former consumes the request body before returning an error, while the latter does not.

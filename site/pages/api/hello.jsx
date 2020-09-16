// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const HelloHandler = (request, response) => {
  response.statusCode = 200;
  response.json({ name: 'John Doe' });
};

export default HelloHandler;

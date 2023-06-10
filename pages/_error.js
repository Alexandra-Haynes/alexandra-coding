function Error({ statusCode }) {
  return (
    <div>
      {statusCode === 404 ? (
        <h1>Page not found</h1>
      ) : (
        <h1>An error occurred</h1>
      )}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

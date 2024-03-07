import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div aria-live="polite" className="mt-24 space-y-6 text-center">
      <h1 className="heading-1">Oops! something went wrong here</h1>
      <p className="text-xl sec-text">{error.message}</p>
      <Button onClick={resetErrorBoundary}> Try again </Button>
    </div>
  );
}

export default ErrorFallback;

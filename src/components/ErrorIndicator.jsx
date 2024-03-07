function ErrorIndicator({ errorMessage }) {
  return (
    <div
      aria-live="polite"
      className="my-14 space-y-2 text-center text-lg font-medium capitalize"
    >
      <p>Sorry, {errorMessage}</p>
      <span className="block">Please try again later</span>
    </div>
  );
}

export default ErrorIndicator;

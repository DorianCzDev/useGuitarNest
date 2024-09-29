function ErrorSpan({ children }) {
  return (
    <span className="pt-[1px] text-sm text-red-500 m-auto tracking-wider">
      {children}
    </span>
  );
}

export default ErrorSpan;

export function ProductDetailsRow({ children }) {
  return (
    <div className="flex items-center justify-between border-t border-primary-700 text-lg p-6 h-10 text-neutral-400 capitalize lg:h-14">
      {children}
    </div>
  );
}

export function ProductDetailsRowValue({ children }) {
  return (
    <span className="font-bold tracking-widest text-neutral-200">
      {children}
    </span>
  );
}

export default function Container({ className, children }) {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-4 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
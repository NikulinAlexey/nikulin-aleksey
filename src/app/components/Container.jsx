export default function Container({ className, children }) {
  return (
    <div
      className={`max-w-[1440px] px-4 md:px-7 xl:px-32 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
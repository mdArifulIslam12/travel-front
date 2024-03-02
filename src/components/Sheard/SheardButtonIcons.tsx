"use client";
const SheardButtonIcons = ({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactNode;
  className: string;
}) => {
  return (
    <button className={`${className} sheardButtonIcons`}> {children}</button>
  );
};

export default SheardButtonIcons;

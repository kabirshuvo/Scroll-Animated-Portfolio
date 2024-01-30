import React from 'react'


interface NavAndFooterProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}
function NavAndFooter({ children, ref }: NavAndFooterProps) {
  return (
    <section
    style={{
      padding: "0rem 0rem",
    }}
  >
    {children}
  </section>
  );
}

export default NavAndFooter


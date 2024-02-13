import React from "react";

type Props = {
  children: React.ReactNode;
  isAdmin: React.ReactNode;
  isUser: React.ReactNode;
};

export default function Layout({ children, isAdmin, isUser }: Props) {
  const isLogin = true;

  return (
    <>
      {/* {children} */}

      {isLogin ? isAdmin : isUser}
    </>
  );
}

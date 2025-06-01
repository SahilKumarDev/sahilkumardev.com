import React from "react";
const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-2xl mx-auto py-2">{children}</div>;
};

export default MaxWidthWrapper;

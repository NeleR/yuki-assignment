import type { PropsWithChildren } from "react";

export default function Pill({ children }: PropsWithChildren) {
  return (
    <span className="text-sm rounded-sm border-1 border-white px-1">
      {children}
    </span>
  );
}

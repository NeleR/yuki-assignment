import type { PropsWithChildren } from "react";

export default function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="text-center text-2xl pb-5 star-wars-font">{children}</h1>
  );
}

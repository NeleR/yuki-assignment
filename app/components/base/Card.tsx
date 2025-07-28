import type { PropsWithChildren } from "react";

type CardType = { className?: string; hoverable?: boolean };

export default function Card({
  hoverable = false,
  children,
}: PropsWithChildren<CardType>) {
  return (
    <div
      className={`p-4 h-full
                rounded-lg border-4 border-yellow-500
                bg-yellow-500/20
                shadow shadow-xl
                ${hoverable ? "hover:bg-yellow-500/50" : ""}
                `}
    >
      {children}
    </div>
  );
}

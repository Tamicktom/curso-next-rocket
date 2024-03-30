
//* Libraries imports
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export function Skeleton({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge("animate-pulse bg-zinc-50/10 rounded-md", className)}
      {...rest}
    />
  );
}
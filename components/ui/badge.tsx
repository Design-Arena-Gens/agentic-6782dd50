import { clsx } from "clsx";
import { type ComponentPropsWithoutRef } from "react";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-light",
        className
      )}
      {...props}
    />
  );
}

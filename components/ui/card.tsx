import { type ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border border-slate-800/80 p-6 shadow-lg transition hover:border-brand/60 hover:shadow-brand/10",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        "mb-4 flex items-start justify-between gap-4 text-slate-100",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={clsx(
        "text-lg font-semibold tracking-tight text-slate-50",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={clsx("text-sm text-slate-400 leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("flex flex-col gap-3 text-slate-200", className)} {...props} />
  );
}

import { clsx } from "clsx";
import { Check } from "lucide-react";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, indeterminate, ...props }, ref) => {
    return (
      <span
        className={clsx(
          "flex h-5 w-5 items-center justify-center rounded-md border border-slate-700 bg-slate-950 text-brand ring-offset-slate-950 transition",
          checked
            ? "border-brand/80 bg-brand/20"
            : "hover:border-brand/60 hover:bg-brand/10",
          className
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          className="peer sr-only"
          checked={checked}
          aria-checked={indeterminate ? "mixed" : checked}
          readOnly={props.readOnly}
          {...props}
        />
        {(checked || indeterminate) && <Check size={14} strokeWidth={2.8} />}
      </span>
    );
  }
);

Checkbox.displayName = "Checkbox";

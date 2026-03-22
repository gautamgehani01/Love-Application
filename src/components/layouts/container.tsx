import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl px-6 md:px-9 lg:max-w-4xl lg:px-12 xl:max-w- *:7xl xl:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}


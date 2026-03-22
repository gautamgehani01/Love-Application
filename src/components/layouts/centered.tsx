import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CenteredLayoutProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
}

export function CenteredLayout({ 
  children, 
  className, 
  ...props 
}: CenteredLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center p-9 md:p-12 lg:p-12",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}


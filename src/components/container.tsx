import { cn } from "@/lib/utils";
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-3xl mx-auto min-h-screen", className)}>
      {children}
    </div>
  );
};

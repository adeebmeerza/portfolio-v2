import React, { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const Status = ({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) => {
  return (
    <Badge
      className={cn(
        "bg-green-300/15 w-fit rounded-full flex items-center",
        className
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-green-500/30"></span>
      </span>
      <p className="inline text-sm text-nowrap ml-2 text-green-500/90">
        {children}
      </p>
    </Badge>
  );
};

export default Status;

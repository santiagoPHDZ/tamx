
import { MAIN_H, MAIN_W } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MainContainer = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={cn(MAIN_H, MAIN_W, "flex", className)}>
            {children}
        </div>
    );
}

export default MainContainer;
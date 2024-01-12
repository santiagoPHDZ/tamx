
import { NAVBAR_H } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const NavbarContainer = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={cn(NAVBAR_H, "px-4 md:px-12", className)}>
            {children}
        </div>
    );
}

export default NavbarContainer;

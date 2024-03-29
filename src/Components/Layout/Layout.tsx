import React from "react";

interface LayoutProps {
    children : React.ReactNode;
}
function Layout({children}: LayoutProps) {
    return (
        <main className="layout">
            {children}
        </main>
    );
}

export default Layout;
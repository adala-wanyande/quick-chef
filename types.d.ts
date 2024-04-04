type NavigationItemProps = {
    section: string,
    scrollToSection: (string) => void,
}

type ButtonProps = {
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
    variant: "text" | "outlined" | "contained",
    text: string,
    link: string,
}

type MobileDrawerProps = {
    children: React.ReactNode,
    open: boolean,
    toggleDrawer: (boolean) => void,
}
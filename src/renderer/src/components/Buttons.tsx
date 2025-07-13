import { useTheme } from "@renderer/context/ThemeContext";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ThemeButtonProps extends ComponentProps<'button'> {
    showIcon?: boolean;
    iconLight?: React.ReactNode;
    iconDark?: React.ReactNode;
}

export const ThemeButton = ({ className, showIcon = true, iconLight, iconDark, ...props }: ThemeButtonProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={twMerge('p-2 rounded-md', className)}
            {...props}
        >
            {showIcon && (theme === 'light' ? iconLight : iconDark)}
        </button>
    )
}
import { useTheme } from "@/context";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SettingsPopup } from "./SettingsPopupProps";

interface ThemeButtonProps extends ComponentProps<'button'> {
    showIcon?: boolean;
    iconLight?: React.ReactNode;
    iconDark?: React.ReactNode;
}

interface SettingsButtonProps extends ComponentProps<'button'> {
    icon?: React.ReactNode;
}

interface SyncButtonProps extends ComponentProps<'button'> {
    icon?: React.ReactNode;
}

interface AddBookButtonProps extends ComponentProps<'button'> {
    icon?: React.ReactNode;
}

export const ThemeButton = ({ className, showIcon = true, iconLight, iconDark, ...props }: ThemeButtonProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="relative group inline-block">
            <button
                onClick={toggleTheme}
                className={twMerge('p-2 rounded-md', className)}
                {...props}
            >
                {showIcon && (theme === 'light' ? iconLight : iconDark)}
            </button>

            <span className="absolute bottom-full mb-2 right-1 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Change Theme
            </span>
        </div>
    )
}

export const SettingsButton = ({ className, icon, ...props }: SettingsButtonProps) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="relative group inline-block">
            <button
                className={twMerge('p-2 rounded-md', className)}
                {...props}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsSettingsOpen(!isSettingsOpen);
                }}
            >
                {icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" /></svg>
                )}
            </button>
            <span className="absolute bottom-full mb-2 left-10 transform -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Open Settings
            </span>
            <SettingsPopup
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </div>
    )
}

export const GitHubSyncButton = ({ className, icon, ...props }: SyncButtonProps) => {
    return (
        <div className="relative group inline-block">
            <button
                className={twMerge('p-2 rounded-md', className)}
                {...props}
            >
                {icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8h-7q-1.65 0-2.825 1.175T11 12q0 .775.263 1.45t.737 1.2v3.7q-.325.35-.537.762t-.338.888zm11 3q-.825 0-1.412-.587T13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712V16.7l-6 2v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23" /></svg>
                )}
            </button>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Sync with GitHub
            </span>
        </div>
    )
}

export const AddBookButton = ({ className, icon, ...props }: AddBookButtonProps) => {
    return (

        <div className="relative group inline-block">
            <button
                className={twMerge('p-2 rounded-md', className)}
                {...props}
            >
                {icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                )}
            </button>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Add New Read
            </span>
        </div>
    )
}
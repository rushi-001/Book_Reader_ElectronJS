import { useTheme } from "@/context"
import { Icon } from '@iconify/react'
import { ComponentProps, forwardRef } from "react"
import { Outlet } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { ThemeButton } from "./Buttons"

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge('w-[250px] h-[100vh + 10px] overflow-auto', className)} {...props}>
            {children}
        </aside>
    )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, children, ...props }, ref) => {
    return (
        <div className={twMerge('flex-1 overflow-auto', className)} {...props} ref={ref}>
            {children}
        </div>
    )
})

export const MainLayout = ({ className, ...props }: ComponentProps<'main'>) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <main className={twMerge('flex flex-row h-screen', className)} {...props}>
            <Sidebar>
                <div className="p-4">
                    // ! WORKING: Working on this theme toggle button
                    <ThemeButton
                        className={`mb-4 main-bg-${theme}`}
                        iconLight={<Icon icon="mdi:weather-sunny" width={24} />}
                        iconDark={<Icon icon="mdi:weather-night" width={24} />}
                    />
                </div>
            </Sidebar>
            <Content>
                <Outlet />
            </Content>
        </main>
    )
}

Content.displayName = 'Content'
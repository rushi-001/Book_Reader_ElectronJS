import { useBooks } from "@/context"
import { ComponentProps, forwardRef, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { AddBookButton, GitHubSyncButton, SettingsButton, ThemeButton } from "./Buttons"
import { Navigation } from "./Navigation"

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge('w-[250px] h-full overflow-hidden', className)} {...props}>
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
    const { addBooks, books } = useBooks()

    useEffect(() => {
        console.log('Books updated:', books)
    }, [books])

    return (
        <main
            className={twMerge(
                'flex flex-row h-screen',
                'bg-main-bg-light dark:bg-main-bg-dark',
                'text-black dark:text-white',
                'transition-colors duration-200',
                className
            )}
            {...props}
        >
            <Sidebar className="bg-navbar-bg-light dark:bg-navbar-bg-dark">
                <div className="flex flex-col h-full justify-between">
                    <Navigation />
                    <div className="p-3 flex flex-row items-end justify-between">
                        <SettingsButton className=" bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" />
                        <GitHubSyncButton className=" bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" />
                        <AddBookButton onClick={addBooks} className=" bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg" />
                        <ThemeButton
                            className=" bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"

                            iconLight={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-6 8a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm5.364-3.05a1 1 0 1 0-1.414 1.414l.707.707a1 1 0 0 0 1.414-1.414zM4.929 4.929a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707a1 1 0 0 1 0-1.414M7.05 18.364a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414zM19.071 4.929a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M7 12a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clip-rule="evenodd" /></svg>}

                            iconDark={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21" /></svg>}
                        />
                    </div>
                </div>
            </Sidebar>
            <Content className="bg-main-bg-light dark:bg-main-bg-dark">
                <Outlet />
            </Content>
        </main>
    )
}

Content.displayName = 'Content'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
    to: string
    icon: React.ReactNode
    label: string
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            className={twMerge(
                'flex items-center gap-2 px-3 py-2 rounded-lg',
                'text-icon-dark dark:text-icon-dark',
                'hover:bg-icon-bg-light hover:text-black dark:hover:bg-icon-bg-dark',
                isActive && 'bg-icon-bg-light text-light dark:bg-icon-bg-dark'
            )}
        >
            {icon}
            <span>{label}</span>
        </Link>
    )
}

export const Navigation = () => {
    return (
        <nav className="flex flex-col gap-2 p-3">
            <NavItem
                to="/"
                label="Dashboard"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z" /></svg>
                }
            />
            <NavItem
                to="/last-read"
                label="Back to Pages"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd" /><path fill="currentColor" d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.46 2.46 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083" /></svg>
                }
            />
            <NavItem
                to="/about"
                label="Collection"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M9.875 0a1 1 0 0 0-.406.156S8.204.952 6.844 1.813c-1.36.86-2.873 1.808-3.219 2l-.063.03C2.306 4.618 2.045 5.884 2 6.594c-.003.033 0 .06 0 .095c-.011.266 0 .437 0 .437v13.063C2 22.087 4.213 23 6.313 23c.7 0 1.4-.113 2-.313c.4-.2.687-.6.687-1v-10.5c0-2.3.5-3.38 2-4.28c.4-.2 4.594-3.095 4.594-3.095c.2-.2.406-.606.406-.906v-.094c0-.4-.2-.706-.5-.906s-.7-.2-1 0c-.1.1-6.2 4.207-7.5 4.907c-1.3.8-2.513.993-2.813.593c-.093-.093-.174-.378-.187-.656v-.063c.001-.272.071-.784.625-1.125c.562-.313 1.957-1.204 3.313-2.062c.573-.363.644-.402 1.093-.688A1 1 0 0 0 11 2.5V1a1 1 0 0 0-1.125-1m8 3.5a1 1 0 0 0-.438.188s-5.034 3.387-5.906 3.968l-.031.032c-.724.543-1.153 1.189-1.344 1.78A3.3 3.3 0 0 0 10 10.5v.313a1 1 0 0 0 0 .093V23c0 1.9 2.188 3 4.188 3c.9 0 1.712-.194 2.312-.594c1.2-.7 7-5.218 7-5.218c.3-.2.5-.482.5-.782v-13c0-.5-.194-.8-.594-1c-.3-.2-.793-.106-1.093.094c-1.6 1.2-5.907 4.588-6.907 5.188c-1.4.8-2.719 1-3.219.5c-.2-.2-.187-.388-.187-.688q.008-.26.063-.438c.056-.174.17-.388.593-.718c.02-.016.01-.015.031-.031c.723-.483 2.934-1.99 4.376-2.97A1 1 0 0 0 19 6V4.5a1 1 0 0 0-1.125-1M22 10.813v2l-5 3.874v-2z" /></svg>
                }
            />
            <NavItem
                to="/projects"
                label="Favorites"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8" /></svg>
                }
            />
            <NavItem
                to="/connect"
                label="Bookmarks"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm5-18v6.125q0 .3.238.438t.512-.013l1.225-.725q.25-.15.513-.15t.512.15l1.225.725q.275.15.525.013t.25-.438V4z" /></svg>
                }
            />
        </nav>
    )
}
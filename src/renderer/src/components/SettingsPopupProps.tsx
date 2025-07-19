import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface SettingsPopupProps extends ComponentProps<'div'> {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsPopup = ({ isOpen, onClose, className }: SettingsPopupProps) => {
    if (!isOpen) return null;

    const menuItems = [
        {
            to: '/settings/profile',
            label: 'Profile',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-1.15q-1.35-1.325-3.137-2.087T12 15t-3.863.763T5 17.85z" /></svg>
        },
        {
            to: '/settings/about',
            label: 'About',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-3q0-.425-.288-.712T12 12t-.712.288T11 13v3q0 .425.288.713T12 17m0-7q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10M6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21z" /></svg>
        },
        {
            to: '/settings/help',
            label: 'Help',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18q.525 0 .888-.363t.362-.887t-.363-.888T12 15.5t-.888.363t-.362.887t.363.888T12 18m-.9-3.85h1.85q0-.9.2-1.325T14 11.75q.875-.875 1.237-1.463T15.6 8.95q0-1.325-.9-2.137T12.275 6q-1.375 0-2.337.675T8.6 8.55l1.65.65q.175-.675.7-1.087t1.225-.413q.675 0 1.125.363t.45.962q0 .425-.275.9t-.925 1.05q-.825.725-1.138 1.388T11.1 14.15M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" /></svg>
        }
    ];

    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-black/40"
                onClick={onClose}
            />
            <div
                className={twMerge(
                    'absolute left-0 bottom-full mb-2',
                    'w-auto p-2',
                    'bg-popup-bg-light dark:bg-popup-bg-dark',
                    'backdrop-blur-md',
                    'border border-white/20 dark:border-gray-700/50',
                    'rounded-lg shadow-lg',
                    'z-50',
                    'animate-fadeIn',
                    'animation-fadeOut',
                    className
                )}
                style={{ minWidth: '200px' }}
            >
                <div className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={onClose}
                            className={twMerge(
                                'flex items-center gap-3 px-3 py-2 rounded-md',
                                'text-icon-light dark:text-icon-dark',
                                'hover:bg-[#DFDFD8] dark:hover:bg-icon-bg-dark',
                                'transition-colors duration-150'
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
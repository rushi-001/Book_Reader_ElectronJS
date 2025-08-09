import React, { ReactNode } from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    titleButtons?: ReactNode;
}

export const PopupLayout: React.FC<PopupProps> = ({ titleButtons, isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-popup-bg-light dark:bg-popup-bg-dark rounded-lg shadow-lg max-w-4xl w-full p-2 relative">
                <div className="flex flex-row items-center p-2 mb-2 justify-between">
                    {title && <h2 className="text-xl font-semibold ">{title}</h2>}
                    <div className='flex flex-row space-x-9'>
                        <div className='flex space-x-2 items-center justify-center'>
                            {titleButtons}
                        </div>
                        <button
                            className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                            onClick={onClose}
                            aria-label="Close popup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 1216 1312"><path fill="currentColor" d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68" /></svg>
                        </button>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

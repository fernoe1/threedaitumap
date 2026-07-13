import { useEffect } from 'react';

const useClickOutside = (ref, onOutside, onInside) => {
    useEffect(() => {
        const handler = (e) => {
            if (!ref.current) return;

            if (ref.current.contains(e.target)) onInside?.(e);
            else onOutside?.(e);
        }

        document.addEventListener("pointerdown", handler);

        return () => {
            document.removeEventListener("pointerdown", handler);
        };
    }, [ref, onOutside, onInside] );
};

export default useClickOutside;
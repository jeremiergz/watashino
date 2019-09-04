import { useCallback, useEffect, useState } from 'react';

const useScreenOrientation = () => {
    if (typeof window !== 'undefined') {
        const [orientation, setOrientation] = useState(window.screen.orientation);
        const handleOrientationChange = useCallback(() => setOrientation(window.screen.orientation), []);
        useEffect(() => {
            window.addEventListener('orientationchange', handleOrientationChange);
            return () => {
                window.removeEventListener('orientationchange', handleOrientationChange);
            };
        }, []);
        return orientation.type.includes('portrait') ? 'portrait' : 'landscape';
    }
    return null;
};

export default useScreenOrientation;

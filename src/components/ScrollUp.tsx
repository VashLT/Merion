import React, { useEffect } from 'react';

const SCROLL_UP_MIN_SCROLL = 20;

const scrollTop = () => {
    setTimeout(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 200);
}

export const ScrollUp: React.FC = () => {
    useEffect(() => {
        const btn = document.getElementById('scrollUp') as HTMLDivElement;

        document.body.onscroll = () => {
            if (document.documentElement.scrollTop > SCROLL_UP_MIN_SCROLL) {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'all';
                btn.style.transform = 'translateY(0)';
                return;
            }
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
            btn.style.transform = 'translateY(10%)';
        };
    }, []);

    return (
        <button id="scrollUp" onClick={scrollTop}>
            <i className="arrow-up"></i>
        </button>
    )
}

export default ScrollUp;
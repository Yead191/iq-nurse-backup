
import React from 'react';
import LayoutClone from './layoutClone';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutClone>
            {children}

        </LayoutClone>
    );
};

export default layout;
import React, { ReactNode } from 'react';

interface Props {
    children: ({ hovering }: { hovering: boolean }) => ReactNode;
}

const Hover = ({ children }: Props): JSX.Element => {
    const [hovering, setHovering] = React.useState(false);

    const mouseEnter = (): void => {
        setHovering(true);
    };
    const mouseLeave = (): void => {
        setHovering(false);
    };

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            {children({ hovering })}
        </div>
    );
};

export default Hover;

import React, { ReactNode } from "react";

interface Props {
    children: ({ hovering }: { hovering: boolean }) => ReactNode;
}

const Hover = ({ children }: Props): JSX.Element => {
    const [hovering, setHovering] = React.useState(false);

    const mouseEnter = (): void => {
        setTimeout((): void => {
            setHovering(true);
        }, 200);

        setTimeout((): void => {
            setHovering(false);
        }, 3000);
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

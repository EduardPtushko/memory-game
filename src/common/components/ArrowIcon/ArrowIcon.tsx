import React from 'react';

function ArrowIcon(props: any): JSX.Element {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            x='0'
            y='0'
            version='1.1'
            viewBox='0 0 64 64'
            xmlSpace='preserve'
            {...props}
        >
            <path
                fill='none'
                stroke='#fff'
                strokeLinejoin='bevel'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M37 15L20 32 37 49'
            ></path>
            <circle
                cx='32'
                cy='32'
                r='30.999'
                fill='none'
                stroke='#fff'
                strokeMiterlimit='10'
                strokeWidth='2'
            ></circle>
        </svg>
    );
}

export default ArrowIcon;

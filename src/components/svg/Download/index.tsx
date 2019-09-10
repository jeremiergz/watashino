import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLOrSVGElement>;

const Download = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    );
};

Download.displayName = 'Download';

export default Download;
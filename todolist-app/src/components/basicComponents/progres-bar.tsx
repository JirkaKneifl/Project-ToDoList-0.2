import React from 'react';

type FillerStyles = {
    height: string;
    width: string;
    backgroundColor: string;
    borderRadius: string;
};

type ProgressBarProps = {
    completed: number;
};

function ProgressBar(props: ProgressBarProps) {
    const { completed } = props;

    const containerStyles = {
        height: 10,
        width: '150px',
        backgroundColor: 'white',
        borderRadius: 50,
        border: '2px solid white',
        margin: 50,
    };
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'var(--primary-color)',
        borderRadius: 'inherit',
        textAlign: 'right' as const,
        transition: 'width 1s ease-in-out',
    };

    const labelStyles = {
        padding: 1,
        color: 'white',
        fontWeight: 'bold',
        fontsize: '4px',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    );
}

export default ProgressBar;

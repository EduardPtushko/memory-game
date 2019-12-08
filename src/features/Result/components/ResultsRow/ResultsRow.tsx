import React from 'react';

interface Props {
    colors: number;
    clicks: number;
    date: string;
    row: number;
}

const ResultsRow = ({ colors, clicks, date, row }: Props): JSX.Element => {
    const renderDate = (date: string): string => {
        return new Date(date)
            .toLocaleString()
            .replace(',', '')
            .split(' ')[0];
    };
    return (
        <tr>
            <td>{row + 1}.</td>
            <td>{colors}</td>
            <td>{clicks}</td>
            <td>{renderDate(date)}</td>
        </tr>
    );
};

export default ResultsRow;

import React from 'react';
import { darken } from 'polished';
import ResultsRow from '../ResultsRow/ResultsRow';
import { Result } from '../../../../types';
import styled from 'styled-components';
import { cyanBlue, gray } from '../../../../common/utilities';

interface Props {
    results: Result[];
}

const ResultsTable = (props: Props): JSX.Element => {
    return (
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>Colors</th>
                    <th>Clicks</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(
                    ({ colors, clicks, date, _id }, i: number) => (
                        <ResultsRow
                            key={_id}
                            colors={colors}
                            clicks={clicks}
                            date={date}
                            row={i}
                        />
                    )
                )}
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    width: 100%;
    max-width: 800px;
    margin: 0 auto 3rem;
    border-collapse: collapse;

    th {
        border: 1px solid ${darken(0.02, cyanBlue)};
        background-color: ${cyanBlue};
        padding: 1rem 0;
    }

    td {
        border: 1px solid ${cyanBlue};
        padding: 1rem 0;
    }

    tr {
        transition: background-color 0.3s ease-out;
        &:hover {
            background-color: ${darken(0.02, gray)};
        }
    }
`;

export default ResultsTable;

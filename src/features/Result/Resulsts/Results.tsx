import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResultsThunk } from './thunks';
import { Wrapper } from '../../../common/utilities';
import ResultsTable from '../components/ResultsTable/ResultsTable';
import Back from '../../../common/components/UIElements/BackToGame/BackToGame';
import { Container } from '../../../common/utilities/Container';
import { AppState } from '../../../app/rootReducer';

const Results = (): JSX.Element => {
    const dispatch = useDispatch();
    const { results } = useSelector(
        (state: Pick<AppState, 'results'>) => state.results
    );
    const token = useSelector(
        (state: Pick<AppState, 'auth'>) => state.auth.token
    );

    React.useEffect((): void => {
        dispatch(fetchResultsThunk(token));
    }, []);

    return (
        <Wrapper>
            <Container>
                <Back text='Back to Game' />
                <h1>Results</h1>
                <ResultsTable results={results} />
            </Container>
        </Wrapper>
    );
};

export default Results;

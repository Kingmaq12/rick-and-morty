import styled from 'styled-components';
import { STATUS, SPECIES } from './constants';

export const ParagraphWrapper = styled.p<{
    status?: string;
    species?: string;
}>`
    border: solid 1px rgba(0, 0, 0, 0.2);
    ${({ status, species }) => (status && `color: ${STATUS[status]}`) || (species && `color: ${SPECIES[species]}`)}
}
`;

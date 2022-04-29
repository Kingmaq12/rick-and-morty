/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import CharacterItemList from './CharacterItemList';
import { SimpleCharacter } from '../../domain/model/Character';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';

describe('CharacterItemList', function () {
    it('Mount the component', () => {
        const characterProps: SimpleCharacter = {
            name: 'Cesar',
            status: 'Alive',
            species: 'Human',
            image: 'testest',
        };

        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <CharacterItemList character={characterProps} />
            </I18nextProvider>,
        );
        expect(container.getElementsByClassName('character').length).toBe(1);
    });
});

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SimpleCharacter } from '../../domain/model/Character';
import './CharacterItemList.scss';
import { ParagraphWrapper } from '../styledComponents/paragraphWrapper';

const CharacterItemList = (props: { character: SimpleCharacter }) => {
    const { t } = useTranslation();
    const { character } = props;
    return (
        <div className="character">
            <div className="character_info">
                <ParagraphWrapper>
                    {t('character.name')}: {character.name}
                </ParagraphWrapper>
                <ParagraphWrapper status={character.status}>
                    {t('character.status')}: {character.status}
                </ParagraphWrapper>
                <ParagraphWrapper species={character.species}>
                    {t('character.species')}: {character.species}
                </ParagraphWrapper>
            </div>
            <img alt="" src={character.image} className="character_img" />
        </div>
    );
};

export default CharacterItemList;

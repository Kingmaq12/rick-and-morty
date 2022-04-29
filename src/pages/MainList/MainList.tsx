import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './MainList.scss';
import { useCharacter } from '../../customHooks/useCharacter';
import { SimpleCharacter } from '../../domain/model/Character';
import CharacterItemList from '../../components/characterItemList/CharacterItemList';

const MainList = () => {
    const { t } = useTranslation();
    const { listCharacter, getListCharacter } = useCharacter();

    useEffect(() => {
        getListCharacter();
    }, []);

    return (
        <div className="page-wrapper">
            <div className="page-wrapper_title">
                <h3>{t('name')}</h3>
            </div>
            <div className="page-wrapper_body">
                {listCharacter.length > 0 && (
                    <div className="container">
                        {listCharacter.map((character: SimpleCharacter, index: number) => {
                            return <CharacterItemList character={character} key={`index-${index}`} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainList;

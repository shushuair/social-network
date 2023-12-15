import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.contentImage}
                     src={'https://thumbs.dreamstime.com/b/funchal-%C3%A2%E2%82%AC-madeira-island-portugal-85328664.jpg'}
                     alt={'image Madeira'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>

        </div>
    )
}
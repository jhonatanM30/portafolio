import React from 'react'
import { Entertainment } from './Entertainment'
import TeamSoccer from './TeamSoccer'

export const Briefcase = () => {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
                <Entertainment />
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
                <TeamSoccer />
            </div>
        </div>
    )
}

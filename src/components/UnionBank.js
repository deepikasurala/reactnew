import React from 'react'
import AndhraBank from './AndhraBank'
import CorporateBank from './CorporateBank'

export default function UnionBank() {
    return (
        <div>
            <AndhraBank location="kavali"/>
            <CorporateBank location="kakinada"/>
        </div>
    )
}

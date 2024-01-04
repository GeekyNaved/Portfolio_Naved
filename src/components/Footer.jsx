import React from 'react'
import SocialLinksGroup from './SocialLinksGroup'
import Email from './Email'

const Footer = () => {
    return (
        <div className="relative mx-auto py-10 text-center">
            <h2 className="text-3xl">Stay Connected</h2>
            <p className='pt-3'>Durg, India</p>
            <Email className="justify-center font-bold" />
            <div className='mt-2'>
                <SocialLinksGroup />
            </div>
        </div>
    )
}

export default Footer
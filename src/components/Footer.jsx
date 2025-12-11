import SocialLinksGroup from './SocialLinksGroup'
import Email from './Email'

const Footer = () => {
    return (
        <div className="relative mx-auto py-10 text-center">
            <h2 className="text-3xl font-bold underline decoration-teal-400 underline-offset-8">Stay Connected</h2>
            <p className='pt-3'>Durg, India</p>
            <Email className="justify-center font-bold py-2" />
            <SocialLinksGroup />
        </div>
    )
}

export default Footer
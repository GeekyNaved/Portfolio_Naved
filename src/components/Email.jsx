import { MdEmail } from 'react-icons/md'

const Email = ({ className }) => {
    return (
        <a
            href="mailto:navedahmed040@gmail.com"
            className={`flex items-center gap-2 text-white ${className}`}
        >
            <MdEmail />
            <p>
                navedahmed040@gmail.com
            </p>
        </a >
    )
}

export default Email
import Link from 'next/link'

const ButtonLink = (props) => {
    return <button className="bg-cyan-600 px-2 py-1 text-gray-100 rounded-[5px] shadow-md hover:shadow-xl">
        {props.children}
    
    </button>
}

export default ButtonLink;
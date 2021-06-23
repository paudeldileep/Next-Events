
const IconText = ({Icon,text}) => {
    return <div>
        <Icon className="w-5 h-5 text-gray-600 inline-flex" />
        <span className="align-middle text-sm font-sans font-semibold ml-[2px] text-blueGray-500">{text}</span>
    </div>
}

export default IconText;
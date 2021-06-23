
const IconText = ({Icon,text}) => {
    return <div>
        <Icon className="w-7 h-7 text-cyan-500 inline-flex" />
        <span className="align-middle text-sm font-normal sm:text-lg  font-sans sm:font-semibold ml-[2px] text-blueGray-500">{text}</span>
    </div>
}

export default IconText;
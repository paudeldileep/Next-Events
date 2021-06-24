

const CustomButton = (props) => {
    return <button type="button" className="bg-cyan-400 focus:outline-none focus:bg-cyan-600 p-1 rounded-md shadow-md text-gray-500 text-lg  w-36 focus:text-gray-100">{props.children}</button>
}

export default CustomButton;
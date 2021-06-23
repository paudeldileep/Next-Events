
const ResultTitle = (props) => {
    return <div className="mb-8 w-2/3 bg-gray-300 rounded-md shadow-md py-4">
        <span>{props.title}</span>
        <span>{props.content}</span>
    </div>
}

export default ResultTitle;
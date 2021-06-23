import { CloudDownloadIcon } from "@heroicons/react/outline";

const LoadingIcon = () => {
    return <>
        <CloudDownloadIcon className="h-8 w-8 animate-bounce mr-2 text-blue-500" />
        <span className="font-mono">Downloading...</span>
    </>
}

export default LoadingIcon;
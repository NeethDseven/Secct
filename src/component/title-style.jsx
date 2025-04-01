import {BiSolidLeaf} from "react-icons/bi";

export function TitleStyle ({value, color}) {
    return (
        <h2 className={`title-style mt-5 mb-5 w-fit ${color}`}>
                        <span className="flex items-center">
                            {value}<BiSolidLeaf className="ml-2"/>
                        </span>
        </h2>
    )
}
import { useState } from "react";
import { DownArrowIcon } from "../../icons/DownArrowIcon";
import "./style.scss"
import classNames from "classnames";

interface DataCardProps<T>{
    data: T[];
}



export const DataCard: React.FC<DataCardProps> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)

    const dataCardClass = classNames({
        'data-card': true,
        '--open': isOpen
    })

    return(
        <div style={isOpen ? {'height': `${35 + (Object.keys(data).length-1) * 24}px`} : {}} className={dataCardClass}>
            <div className="data-card__info">
                {
                    data.map((field) => (
                        <div className="info__field">
                            <p className="field__name">{Object.entries(field)[0][1]}:</p>
                            <p className="field__text">{Object.entries(field)[1][1]}</p>
                        </div>
                    ))
                }
            </div>
            <DownArrowIcon style={isOpen ? {"transform": "rotate(180deg)"} : {}} onClick={() => setIsOpen(!isOpen)} />
        </div>
    )
}
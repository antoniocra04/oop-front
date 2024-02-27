import { ComponentPropsWithRef } from "react"
import './style.scss';

interface SelectProps extends ComponentPropsWithRef<"select">{}

export const Select: React.FC<SelectProps> = (props) => {
    return(
        <div className="select-container">
            <select className="select" {...props}>
                {props.children}
            </select>
        </div>
    )
}
import "./style.scss"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{}

export const Button: React.FC<ButtonProps> = (props) => {
    return(
        <button className="button" {...props}>{props.children}</button>
    )
}
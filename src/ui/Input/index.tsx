import { ComponentPropsWithRef } from 'react';
import './style.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input: React.FC<InputProps> = (props) => {
	return <input className="input" {...props} />;
};

import './style.scss';

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			<div className="page-content">{children}</div>
		</>
	);
};

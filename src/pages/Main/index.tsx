import { useQueries } from '@tanstack/react-query';
import { useEffect } from 'react';

import { PageLayout } from '@components/PageLayout';
import { Tabs } from '@components/Tabs';

import { useAppDispatch } from '@store/hooks/hooks';
import { setActiveTab, setObjects } from '@store/data/dataSlice';

import { getAllItems } from '@api/services/items';
import { getAllCustomers } from '@api/services/customers';

import './style.scss';
import { useTabs } from '@hooks/useTabs';
import { parseCustomer } from '../../utils/parseCustomer';

export const MainPage: React.FC = () => {
	const queries = useQueries({
		queries: [
			{ queryKey: ['items'], queryFn: getAllItems },
			{ queryKey: ['customers'], queryFn: getAllCustomers },
		],
	});
	const dispatch = useAppDispatch();
	const tabs = useTabs();

	const onTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.innerText == 'Items' && queries[0].isSuccess) {
			dispatch(setObjects(queries[0].data?.data));
			dispatch(setActiveTab(e.currentTarget.innerText));
		}
		if (e.currentTarget.innerText == 'Customers' && queries[1].isSuccess) {
			dispatch(setObjects(parseCustomer(queries[1].data.data)));
			dispatch(setActiveTab(e.currentTarget.innerText));
		}
	};

	useEffect(() => {
		getAllItems().then((res) => {
			dispatch(setObjects(res.data));
		});
	}, []);

	return (
		<PageLayout>
			<div className="main">
				<div className="main-container">
					<Tabs onClick={onTabClick} data={tabs} />
				</div>
			</div>
		</PageLayout>
	);
};

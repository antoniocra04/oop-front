import { useQueries } from '@tanstack/react-query';
import { useEffect } from 'react';

import { PageLayout } from '@components/PageLayout';
import { Tabs } from '@components/Tabs';
import { ItemsForm } from '@forms/ItemsForm';
import { CustomerForm } from '@forms/CustomerForm';
import { DataCard } from '@components/DataCard';

import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { setActiveTab, setObjects } from '@store/data/dataSlice';

import { getAllItems } from '@api/services/items';
import { getAllCustomers } from '@api/services/customers';


import './style.scss';

const tabs = [
	{ title: 'Items', content: <ItemsForm /> },
	{ title: 'Customers', content: <CustomerForm /> },
];

export const MainPage: React.FC = () => {
	const queries = useQueries({
		queries: [
			{ queryKey: ['items'], queryFn: getAllItems },
			{ queryKey: ['customers'], queryFn: getAllCustomers },
		],
	});
	const objects = useAppSelector((state) => state.data);
	const dispatch = useAppDispatch();

	const onTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.innerText == 'Items' && queries[0].isSuccess) {
			dispatch(setObjects(queries[0].data?.data));
			dispatch(setActiveTab(e.currentTarget.innerText))
		}
		if (e.currentTarget.innerText == 'Customers' && queries[1].isSuccess) {
			dispatch(setObjects(queries[1].data?.data));
			dispatch(setActiveTab(e.currentTarget.innerText))
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
				<div className="">
					<Tabs onClick={onTabClick} data={tabs} />
				</div>
				<div className="main__data-container">
					{objects.objectList.map((object) => (
						<DataCard data={object} />
					))}
				</div>
			</div>
		</PageLayout>
	);
};

import { CustomerDataCard } from '@components/DataCard/CustomerDataCard';
import { ItemDataCard } from '@components/DataCard/ItemDataCard';
import { CustomerForm } from '@forms/CustomerForm';
import { ItemsForm } from '@forms/ItemsForm';
import { useAppSelector } from '@store/hooks/hooks';

/**
 * Хук для получения массива с табами
 * @returns Массив табов
 */
export const useTabs = () => {
	const objectList = useAppSelector((state) => state.data.objectList);

	const tabs = [
		{
			title: 'Items',
			content: (
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
					<ItemsForm />
					<div className="main__data-container">
						{objectList.map((object) => (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-ignore
							<ItemDataCard data={object} />
						))}
					</div>
				</div>
			),
		},
		{
			title: 'Customers',
			content: (
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
					<CustomerForm />
					<div className="main__data-container">
						{objectList.map((object) => (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-ignore
							<CustomerDataCard data={object} />
						))}
					</div>
				</div>
			),
		},
	];

	return tabs;
};

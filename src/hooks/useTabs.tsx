import { CustomerDataCard } from "@components/DataCard/CustomerDataCard";
import { ItemDataCard } from "@components/DataCard/ItemDataCard";
import { CustomerForm } from "@forms/CustomerForm";
import { ItemsForm } from "@forms/ItemsForm";
import { useAppSelector } from "@store/hooks/hooks"

export const useTabs = () => {
    const objectList = useAppSelector((state) => state.data.objectList)

    const tabs = [
		{
			title: 'Items',
			content: (
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
					<ItemsForm />
					<div className="main__data-container">
						{objectList.map((object) => (
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
							<CustomerDataCard data={object} />
						))}
					</div>
				</div>
			),
		},
	];

    return tabs
}
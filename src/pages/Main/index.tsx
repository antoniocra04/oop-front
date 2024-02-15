import { PageLayout } from "@components/PageLayout";
import "./style.scss";
import { Tabs } from "@components/Tabs";
import { ItemsForm } from "@components/forms/ItemsForm";
import { CustomerForm } from "@components/forms/CustomerForm";
import { DataCard } from "@components/DataCard";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "@api/services/items";

const tabs = [
    {title: "Items", content: <ItemsForm/>},
    {title: "Customers", content: <CustomerForm/>}
]

const data = [
    [
        {name: 'ssdf', text: 'sadfs'},
        {name: 'ssdf', text: 'sadfs'},
        {name: 'ssdf', text: 'sadfs'}
    ],
    [
        {name: 'ssdf', text: 'sadfs'},
        {name: 'ssdf', text: 'sadfs'},
        {name: 'ssdf', text: 'sadfs'}
    ],
]

export const MainPage: React.FC = () => {
    const items = useQuery({queryKey: ['items'], queryFn: getAllItems})
    return(
        <PageLayout>
            <div className="main">
                <div className="">
                    <Tabs onClick={() => {}} data={tabs}/>
                </div>
                {
                    items.isSuccess ?   

                        <div className="main__data-container">
                            {items.data.data.map((item) => (
                                <DataCard data={item}/>
                            ))}
                        </div>

                : ""
                }

            </div>
        </PageLayout>
    )
}
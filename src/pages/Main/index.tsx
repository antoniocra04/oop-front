import { PageLayout } from "@components/PageLayout";
import "./style.scss";
import { Tabs } from "@components/Tabs";
import { ItemsForm } from "@components/forms/ItemsForm";
import { CustomerForm } from "@components/forms/CustomerForm";
import { DataCard } from "@components/DataCard";

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
    return(
        <PageLayout>
            <div className="main">
                <div className="">
                    <Tabs onClick={() => {}} data={tabs}/>
                </div>
                <div className="main__data-container">
                    {data.map((card) => (
                        <DataCard data={card}/>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
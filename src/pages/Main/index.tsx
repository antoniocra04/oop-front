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

export const MainPage: React.FC = () => {
    return(
        <PageLayout>
            <div className="main">
                <Tabs onClick={() => {}} data={tabs}/>
                <DataCard data={[{name: 'asdfas', text: 'asdfasdf'}, {name: 'asdfas', text: 'asdfasdf'}, {name: 'asdfas', text: 'asdfasdf'}, {name: 'asdfas', text: 'asdfasdf'}]} />
            </div>
        </PageLayout>
    )
}
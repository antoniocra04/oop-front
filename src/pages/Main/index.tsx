import { PageLayout } from "@components/PageLayout";
import "./style.scss";
import { Tabs } from "@components/Tabs";
import { ItemsForm } from "@components/ItemsForm";

const tabs = [
    {title: "Items", content: <ItemsForm/>},
    {title: "Items2", content: <ItemsForm/>}
]

export const MainPage: React.FC = () => {
    return(
        <PageLayout>
            <div className="main">
                <Tabs onClick={() => {}} data={tabs}/>
            </div>
        </PageLayout>
    )
}
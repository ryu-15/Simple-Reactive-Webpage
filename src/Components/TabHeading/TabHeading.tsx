import React, {useState} from 'react';
import TabHeadingContent from "../TabHeadingContent/TabHeadingContent.tsx";

interface TabHeadingContent {
    tabName: string;
    tabContent: React.ReactNode;
}

const buttonList: TabHeadingContent[] = [
    {tabName: 'Label-1', tabContent: <TabHeadingContent tabindex={0}/>},
    {tabName: 'Label-2', tabContent: <TabHeadingContent tabindex={1} />},
    {tabName: 'Label-3', tabContent: <TabHeadingContent tabindex={2} />},
    {tabName: 'Label-4', tabContent: <TabHeadingContent tabindex={3} />},
]
const TabHeading = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const handleButtonClick = (StatCardNumber: number) => {
        setSelectedTab(StatCardNumber);
    };
    return (
        <div className="tab-container">
            <div className="tab-button-wrapper ">
            {buttonList.map((data,index) => (
                <>
                    <div className="tab-heading">
                        <button onClick={() => handleButtonClick(index)} className={`tabHeadingElement ${selectedTab === index? 'active': ""} `}>
                            {data.tabName}
                        </button>
                    </div>
                </>
            ))}
                </div>
            <div className="stat-card-section">
                {buttonList[selectedTab].tabContent}
            </div>
        </div>
    )
};
export default TabHeading;

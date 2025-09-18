"use client"
import PageNavbar from '@/components/shared/user-dashboard/PageNavbar';
import { Alert, Card, Checkbox, ConfigProvider, Progress, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { File } from "lucide-react";
import type { TabsProps } from 'antd';
import MediaTab from '@/components/shared/MediaTab';
import NoteTab from '../study-notes-page/surgical-details-page/NoteTab';


type Props = {
    params: {
        id: string
    }
}


export default function ClinicalsPageDetails() {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Checklist',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Notes',
            children: <NoteTab /> 
        },
        {
            key: '3',
            label: 'Video',
            children: <MediaTab />
        },
    ];
    return (
        <>
            <PageNavbar
                icon={<File />}
                title="Document Templates"
                subtitle="Professional nursing documentation templates for clinical practice"
                isAiEnhanced={true}
            />
            <div className=" mx-auto px-8">


                {/* Category Banner */}
                <Card
                    className="mb-6"
                    bodyStyle={{
                        padding: "16px",
                        background: "linear-gradient(90deg, #003877 0%, #0068DD 100%)",
                        borderRadius: "12px",
                    }}
                >
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">❤️</span>
                            <div>
                                <h3 className="text-lg font-semibold">Basic Skills</h3>
                                <p className="text-sm opacity-80">20 Skills</p>
                            </div>
                        </div>
                        <Progress type="circle" percent={87} size={60} strokeColor="#fff" />
                    </div>
                </Card>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">Blood Pressure Measurement</h3>

                {/* Tabs */}
          
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                        className="mb-6"
                        tabBarGutter={300}
                        // style={{ width: '50%' }}
                    />
            </div>
        </>


    )
}

import { Button, Form, Input, message, Select, Upload } from 'antd';
import React, { useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { RiDeleteBin6Line } from 'react-icons/ri';

const StartScratchCard = ({ values }: { values?: { id: number, term: string, image: string, definition: string, definitionImage: string } }) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (values) {
            form.setFieldsValue({
                term: values.term,
                definition: values.definition,
                image: values.image,
                definitionImage: values.definitionImage,
            });
        }
    }, [values, form]);
    const handleUpload = (file: any) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('You can only upload image files!');
            return false;
        }
        return true;
    };

    const options = [
        {
            label: "Term and Definition",
            value: "Term and Definition",
        }
    ]

    return (
        <div className='w-full border border-gray-200 rounded-xl p-5 bg-gray-50 '>

            <div className=' flex items-center justify-between pb-5'>

                <div className=' flex lg:flex-row flex-col  gap-3 '>
                    <p className='text-sm'> Type :</p>
                    <Select className=' ' placeholder={"Select Type"} style={{ width: 200, height: 40 }} options={options} />
                </div>

                <div className={`bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer ${values?.id ? "block" : "hidden"}`}>
                    <RiDeleteBin6Line className="text-red-500" size={18} />
                </div>
            </div>
            <Form
                layout="vertical"
                // onFinish={onFinish} 
                className=" w-full "
                form={form}

            >
                <div className={`grid   ${values?.id ? "lg:grid-cols-2" : "lg:grid-cols-1"}  grid-cols-1 gap-x-6 `}>

                    <div className=' flex flex-col gap-x-2'>
                        {/* Term Field */}
                        <Form.Item
                            name="term"
                            label={<p className=' text-sm font-normal '> Term </p>}
                            rules={[{ required: true, message: 'Please enter the term!' }]}
                        >
                            <Input placeholder="Enter term" className="w-full" style={{ height: 50 }} />
                        </Form.Item>

                        {/* Image Upload Section */}
                        <Form.Item name="image" label={<p className=' text-sm font-normal '> Term Image </p>} >
                            <Upload
                                customRequest={() => { }}
                                showUploadList={false}
                                beforeUpload={handleUpload}
                                style={{ width: "100%" }}
                            >
                                <Button icon={<UploadOutlined />} type="dashed" block style={{ height: 45, width: "100%" }}>
                                    Upload Image
                                </Button>
                            </Upload>
                        </Form.Item>

                    </div>

                    <div className=' flex flex-col gap-x-2'>
                        {/* Definition Field */}
                        <Form.Item
                            name="definition"
                            label="Definition"
                            rules={[{ required: true, message: 'Please enter the definition!' }]}
                        >
                            <Input
                                placeholder="Enter definition"
                                className="w-full" style={{ height: 50 }}
                            />
                        </Form.Item>

                        {/* Image Upload Section */}
                        <Form.Item name="definitionImage" label={<p className=' text-sm font-normal '> Definition Image </p>}>
                            <Upload
                                customRequest={() => { }}
                                showUploadList={false}
                                beforeUpload={handleUpload}
                                style={{ width: "100%" }}
                            >
                                <Button icon={<UploadOutlined />} className=' bg-red-50' type="dashed" block style={{ height: 45 }}>
                                    Upload Image
                                </Button>
                            </Upload>
                        </Form.Item>


                    </div>

                </div>

                {/* Submit Button */}

                <div className={` ${values?.id ? "hidden" : "block"}  w-full flex items-end justify-end`}>
                    <Button type="primary" htmlType="submit" size="large" className="w-[200px]  flex justify-end">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default StartScratchCard;
import React, { useState } from 'react'
import {
  Button, Input, Form, Table, Modal, message, Card,
  FloatButton, Typography, Divider, Row, Col,
  Space, Radio, Tooltip, Flex
} from "antd";

import {
  SearchOutlined,
  PoweroffOutlined,
  SyncOutlined,
  PlusOutlined
} from "@ant-design/icons";

const AntApp = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('end');
  const [loadings, setLoadings] = useState([]);

  const data = [
    { key: 1, name: "John", age: 25 },
    { key: 2, name: "Alice", age: 30 },
  ];

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
  ];

  const onFinish = (values) => {
    message.success("Form Submitted!");
    console.log(values);
  };

  const enterLoading = (index) => {
    setLoadings(prev => {
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prev => {
        const newLoadings = [...prev];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center p-6 gap-6">

      {/* 🔥 Typography */}
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl text-center">
        <Typography.Title level={2}>Ant Design Dashboard</Typography.Title>
        <Typography.Text type="secondary">
          Full UI Components Demo
        </Typography.Text>
      </Card>

      {/* 🔥 Buttons */}
      <Card title="Buttons" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button type='primary'>Primary</Button>
          <Button danger>Danger</Button>
          <Button type='default'>Default</Button>
          <Button type='link'>Link</Button>
          <Button type='text'>Text</Button>
          <Button ghost>Ghost</Button>
          <Button type='dashed'>Dashed</Button>
        </div>
      </Card>

      {/* 🔥 Grid */}
      <Card title="Grid System" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <Row gutter={16}>
          <Col span={8}><div className="bg-blue-200 p-4 rounded-xl text-center">Col 1</div></Col>
          <Col span={8}><div className="bg-purple-200 p-4 rounded-xl text-center">Col 2</div></Col>
          <Col span={8}><div className="bg-pink-200 p-4 rounded-xl text-center">Col 3</div></Col>
        </Row>
      </Card>

      {/* 🔥 Input */}
      <Card title="Input & Message" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <div className="flex gap-4">
          <Input placeholder="Enter your name" />
          <Button type="primary" onClick={() => message.success("Clicked!")}>
            Click
          </Button>
        </div>
      </Card>

      {/* 🔥 Form */}
      <Card title="Form" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <Form onFinish={onFinish} layout="inline">
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </Card>

      {/* 🔥 Table */}
      <Card title="Table Data" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <Table dataSource={data} columns={columns} pagination={false} />
      </Card>

      {/* 🔥 Modal */}
      <Card title="Modal" className="w-full max-w-3xl shadow-lg rounded-2xl text-center">
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
          <p>Hello from Modal 👋</p>
        </Modal>
      </Card>

      {/* 🔥 Loading Buttons */}
      <Card title="Loading Buttons" className="w-full max-w-3xl shadow-lg rounded-2xl">
        <Flex gap="small" wrap>
          <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Load
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
            Power
          </Button>
          <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>
            Sync
          </Button>
        </Flex>
      </Card>

      {/* 🔥 Divider + Icon Buttons */}
      <Divider>Icons</Divider>
      <Space>
        <Radio.Group value={position} onChange={e => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>

      <Flex gap="small" wrap>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />} iconPlacement={position}>
          Search
        </Button>
      </Flex>

      {/* 🚀 Float Button */}
      <FloatButton.Group shape="circle">
        <FloatButton
          icon={<PlusOutlined />}
          tooltip="Add"
          onClick={() => message.success("Add Clicked")}
        />
        <FloatButton
          icon={<SearchOutlined />}
          tooltip="Search"
          onClick={() => message.info("Search Clicked")}
        />
      </FloatButton.Group>

    </div>
  );
};

export default AntApp;
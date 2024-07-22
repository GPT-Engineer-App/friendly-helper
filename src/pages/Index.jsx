import React, { useState } from 'react';
import { Button } from 'antd';
import NoteForm from '../components/NoteForm';

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = (values) => {
    console.log('Form values:', values);
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Ant Design Form Example</h1>
      <Button onClick={showModal}>Open Form</Button>
      <NoteForm
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default Index;
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const NoteForm = ({ visible, onCancel, onOk }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
      form.resetFields();
    }).catch((info) => {
      console.log('Validate Failed:', info);
    });
  };

  return (
    <Modal
      title="催促"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={400}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="note"
          label={<span style={{ color: '#000000d9' }}>备注<span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span></span>}
          rules={[{ required: true, message: '请输入备注' }]}
        >
          <Input.TextArea
            showCount
            maxLength={500}
            style={{ height: 120, resize: 'none' }}
          />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
          <Button onClick={onCancel} style={{ marginRight: 8 }}>
            取消
          </Button>
          <Button type="primary" onClick={handleOk}>
            确定
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default NoteForm;
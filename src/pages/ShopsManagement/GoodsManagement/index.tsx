'use client';

import {
  deleteShopById,
  getShops,
  postCreateShop,
  putEditShops,
} from '@/services/api/shops';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
import { Select } from 'antd/lib';
import React, { useState } from 'react';
interface Product {
  id: number;
  name: string;
  description: string;
  logo: string;
  legal_name: string;
  id_card_no: string;
  id_card_front: string;
  id_card_back: string;
  business_license: string;
  business_permit: string;
  wechat_qrcode: string;
  audit_status: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export default function GoodsPage() {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingShop, setEditingShop] = useState<Product | null>(null);

  const { data:Shops } = useRequest(getShops, {
    manual: false,
  });

  const actionRef = React.useRef<ActionType>();

  const handleAdd = () => {
    form.resetFields();
    setEditingShop(null);
    setModalVisible(true);
  };

  const handleEdit = (record: Product) => {
    form.setFieldsValue(record);
    setEditingShop(record);
    setModalVisible(true);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingShop) {
        putEditShops({ id: editingShop.id, ...values })
          .then((res) => {
            if (res.code === 0) {
              message.success('更新成功');
              actionRef.current?.reload();
            } else {
              message.error('更新失败');
            }
          })
          .catch(() => {
            message.error('更新失败');
          });
      } else {
        postCreateShop(values)
          .then((res) => {
            if (res.code === 0) {
              message.success('创建成功');
              actionRef.current?.reload();
            } else {
              message.error('创建失败');
            }
          })
          .catch(() => {
            message.error('创建失败');
          });
      }
      setModalVisible(false);
    } catch (error) {
      console.error('提交失败:', error);
    }
  };

  const columns: ProColumns<Product>[] = [
    {
      title: '商品名称',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: '商品描述',
      dataIndex: 'description',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '法人姓名',
      dataIndex: 'legal_name',
      hideInSearch: true,
    },
    {
      title: '审核状态',
      dataIndex: 'audit_status',
      valueEnum: {
        0: { text: '待审核', status: 'warning' },
        1: { text: '审核通过', status: 'success' },
        2: { text: '审核拒绝', status: 'error' },
      },
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '关闭', status: 'error' },
        1: { text: '正常', status: 'success' },
      },
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a key="edit" onClick={() => handleEdit(record)}>
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            Modal.confirm({
              title: 'warning',
              content: 'Is it confirmed to delete?',
              onOk() {
                deleteShopById({ id: record.id })
                  .then(() => {
                    message.success('删除成功');
                    // 刷新表格
                    actionRef.current?.reload();
                  })
                  .catch(() => {
                    message.error('删除失败');
                  });
              },
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <PageContainer
      title={'商品管理'}
      extra={
        <Button
          onClick={() => {
            history.push(`/game/edit/new`);
          }}
        >{`Add new`}</Button>
      }
    >
      <ProTable<Product>
        // title="商品列表"
        actionRef={actionRef}
        columns={columns}
        request={async (params) => {
          const {
            data: { list, total },
          } = await getShops({
            ...params,
          });

          return {
            data: list,
            success: true,
            total: total,
          };
        }}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={handleAdd}
          >
            新建
          </Button>,
        ]}
      />

      <Modal
        title={editingShop ? '编辑商品' : '新建商品'}
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="所属店铺"
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <Select
              style={{ width: '100%' }}
              showSearch
              placeholder="Select a person"
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={Shops?.data?.list.map(ele=>({ value: ele.id, label: ele.name }))||[
                { value: '1', label: 'Jack' },
                { value: '2', label: 'Lucy' },
                { value: '3', label: 'Tom' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="name"
            label="商品名称"
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="商品描述">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="business_license" label="商品图片">
            <Upload
              action={APP_API_HOST + '/api/v1/upload'}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  const path = file.response?.path;
                  form.setFieldValue('business_license', path);
                }
              }}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
}

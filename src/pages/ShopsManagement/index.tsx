'use client';

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Form, Input, message, Upload } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import React from 'react';
import { useRequest } from 'ahooks';
import { getShops, postCreateShop,deleteShopById,putEditShops } from '@/services/api/shops';
import { history } from '@umijs/max';
interface Shop {
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

export default function ShopsPage() {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingShop, setEditingShop] = useState<Shop | null>(null);

  const {run:toGetShopList}=useRequest(getShops,{
    manual:true,
  })
 
 

  const actionRef = React.useRef<ActionType>();

  const handleAdd = () => {
    form.resetFields();
    setEditingShop(null);
    setModalVisible(true);
  };

  const handleEdit = (record: Shop) => {
    form.setFieldsValue(record);
    setEditingShop(record);
    setModalVisible(true);
  };



  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingShop) {
        
        putEditShops({id:editingShop.id,...values}).then((res)=>{
          if (res.code === 0) {
            message.success('更新成功');
            actionRef.current?.reload();
          }else{
            message.error('更新失败');
          }
          
        }).catch(()=>{
          message.error('更新失败');
        })
      } else {
        postCreateShop(values).then((res)=>{
          if (res.code === 0) {
            message.success('创建成功');
            actionRef.current?.reload();
          }else{
            message.error('创建失败');
          }
        }).catch(()=>{
          message.error('创建失败');
        })
      }
      setModalVisible(false);
      
    } catch (error) {
      console.error('提交失败:', error);
    }
  };

  const columns: ProColumns<Shop>[] = [
    {
      title: '店铺名称',
      dataIndex: 'name',
    },
    {
      title: '店铺描述',
      dataIndex: 'description',
      ellipsis: true,
    },
    {
      title: '法人姓名',
      dataIndex: 'legal_name',
    },
    {
      title: '审核状态',
      dataIndex: 'audit_status',
      valueEnum: {
        0: { text: '待审核', status: 'warning' },
        1: { text: '审核通过', status: 'success' },
        2: { text: '审核拒绝', status: 'error' },
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '关闭', status: 'error' },
        1: { text: '正常', status: 'success' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a key="edit" onClick={() => handleEdit(record)}>
          编辑
        </a>,
        <a key="delete" onClick={() => {
          Modal.confirm({
            title: 'warning',
            content: 'Is it confirmed to delete?',
            onOk() {
              deleteShopById({id:record.id}).then(()=>{
                message.success('删除成功');
                // 刷新表格
                actionRef.current?.reload();
              }).catch(()=>{
                message.error('删除失败');
              })
            }
          })
         
        }}>
          删除
        </a>,
         <a key="edit" onClick={() => history.push(`/shop_management/${record.id}/goods`)}>
          管理商品
        </a>
      ],
    },
  ];

  return (
    <div className="p-6">
      <ProTable<Shop>
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
        title={editingShop ? '编辑店铺' : '新建店铺'}
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="店铺名称"
            rules={[{ required: true, message: '请输入店铺名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="店铺描述"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="logo"
            label="店铺Logo"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  // 从响应中提取路径并设置表单字段值
                  const path = file.response?.path;
                  form.setFieldValue('logo', path);
                }
              }}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="legal_name"
            label="法人姓名"
            rules={[{ required: true, message: '请输入法人姓名' }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            name="owner_id"
            label="owner_id"
            rules={[{ required: true, message: '请输入owner_id' }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            name="id_card_no"
            label="法人身份证号"
            rules={[{ required: true, message: '请输入法人身份证号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="id_card_front"
            label="身份证正面"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  const path = file.response?.path;
                  form.setFieldValue('id_card_front', path);
                }
              }}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="id_card_back"
            label="身份证反面"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  const path = file.response?.path;
                  form.setFieldValue('id_card_back', path);
                }
              }}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="business_license"
            label="营业执照"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
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
          <Form.Item
            name="business_permit"
            label="经营许可证"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  const path = file.response?.path;
                  form.setFieldValue('business_permit', path);
                }
              }}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="wechat_qrcode"
            label="微信二维码"
          >
            <Upload
              action={APP_API_HOST+"/api/v1/upload"}
              listType="picture-card"
              maxCount={1}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  const path = file.response?.path;
                  form.setFieldValue('wechat_qrcode', path);
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
    </div>
  );
}
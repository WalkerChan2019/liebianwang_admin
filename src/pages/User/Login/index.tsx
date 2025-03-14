
import { getQueryParam } from '@/utils';
import { TOKEN } from '@/utils/constants';
import storage from '@/utils/storage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Image, message, Spin } from 'antd';
import { useCallback, useState } from 'react';
import './index.less';
import { postAdminLogin } from '@/services/api/user';

export default function LoginPage() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>();


  const handleLogin = useCallback(
    async (values: any) => {
      setLoading(true);
      postAdminLogin({
        ...values,
      })
        .then((res) => {
          if (res.code === 0) {
            storage.set(TOKEN, 'Bearer '+res.token);
            // fetchUserInfo();
            setLoading(false);
            message.success('success', 0.5, function () {
              history.push('/shop_management');
            });
          } else {
            message.error(res.msg || res.msg, 2, () => {
              setLoading(false);
              // refresh();
            });
          }
        })
        .catch(() => {
          setLoading(false);
        })
        .finally(() => {
          // refresh();
        });
    },
    [],
  );

  return (
    <div className="login-page-wrap">
      <Helmet>
        <title>Aika Admin</title>
      </Helmet>
      <ProConfigProvider hashed={false} token={{}}>
        <LoginForm
          logo={null}
          className="login-form"
          loading={loading}
          title="Aika Admin"
          // subTitle="欢迎使用秒差距中后台管理系统"
          onFinish={handleLogin}
          initialValues={{
            username: '15390172693',
            password: 'admin123',
          }}
          submitter={{
            searchConfig: { submitText: 'Sign In' },
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined style={{ color: 'blue' }} />,
            }}
            placeholder={'username'}
            rules={[
              {
                required: true,
                // type: 'email',
                message: 'username',
              },
            ]}
          />

          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined style={{ color: 'blue' }} />,
            }}
            placeholder={'password'}
            rules={[
              {
                required: true,
                message: 'password',
              },
            ]}
          />

         

          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Remember me
            </ProFormCheckbox>
          </div>
        </LoginForm>
      </ProConfigProvider>
    </div>
  );
}

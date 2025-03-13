import { useEffect, useState } from 'react';
import { Chat } from 'react-jwchat';
// import { contact, my } from './displayData';
// import { messageList } from './displayData';
import { useModel } from '@umijs/max';
import DisplayWrapper from './DisplayWrapper';
import './index.less';

export default function DemoChat(props: any) {
  const { mqttPublish, messageList, Details } = props;
  const [chatListData, setChatListData] = useState<any[]>([]);

  const { initialState } = useModel('@@initialState');
  // console.log(initialState?.me);

  useEffect(() => {
    setChatListData([...messageList]);
  }, [messageList]);

  return (
    <DisplayWrapper>
      <Chat
        // contact={contact}
        // me={my}
        contact={{
          id: Details?.id,
          avatar: Details?.avatr,
          nickname: Details?.botName,
        }}
        me={{
          ...initialState?.me,
          id: initialState?.me?.userId,
        }}
        chatList={chatListData}
        // onSend={(msg: any) => setChatListData([...chatListData, msg])}
        onSend={(msg: any) => {
          mqttPublish(msg);
        }}
        onEarlier={() => console.log('EarlierEarlier')}
        style={{
          width: 600,
          height: 700,
          borderRadius: 5,
          border: '1px solid rgb(226, 226, 226)',
        }}
      />
    </DisplayWrapper>
  );
}

import { Space, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import NoticeIcon from '../NoticeIcon/NoticeIcon';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');

  // 测试useModel
  const list = useModel('demo');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <NoticeIcon
        count={10}
        onItemClick={(item) => {
          message.info(`${item.title} 被点击了`);
        }}
        onClear={(title, key) => message.info('点击了清空更多')}
        loading={false}
        clearText="清空"
        viewMoreText="查看更多"
        onViewMore={() => message.info('点击了查看更多')}
        clearClose
      >
        <NoticeIcon.Tab
          tabKey="notification"
          count={2}
          list={list}
          title="通知"
          emptyText="你已查看所有通知"
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="message"
          count={2}
          list={list}
          title="消息"
          emptyText="您已读完所有消息"
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="event"
          title="待办"
          emptyText="你已完成所有待办"
          count={2}
          list={list}
          showViewMore
        />
      </NoticeIcon>
      <Avatar />
      {/* <SelectLang className={styles.action} /> */}
    </Space>
  );
};

export default GlobalHeaderRight;

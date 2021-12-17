import { PageContainer } from '@ant-design/pro-layout';
import { Card, message } from 'antd';
import { useModel } from 'umi';

export default () => {
  const list = useModel('demo');
  console.log(list);

  return (
    <PageContainer>
      <Card>123</Card>
    </PageContainer>
  );
};

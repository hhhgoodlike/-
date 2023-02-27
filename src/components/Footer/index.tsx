import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { HOBBY_LINK } from '@/constants';
const Footer: React.FC = () => {
  const defaultMessage = '兴趣出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'baidu',
          title: '百度',
          href: 'www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />
              HH GitHub
            </>
          ),
          href: HOBBY_LINK,
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'CSDN',
          href: 'https://www.csdn.net/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

import { LayoutPaths, Paths } from '@/pages/routers';
import {
  DashboardOutlined,
  UserOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UnorderedListOutlined,
  HighlightOutlined,
} from '@ant-design/icons';

export const dataSidebar = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { key: 'dashboard-1', link: Paths.Home, title: 'Dashboard 1' },
      { key: 'dashboard-2', link: Paths.Home, title: 'Dashboard 2' },
    ],
  },
  {
    key: 'user',
    title: 'User',
    icon: <UserOutlined />,
    link: Paths.Users,
    activePaths: [`${LayoutPaths.Admin}${Paths.Users}`],
    disabled: false,
    children: [
      { key: 'user-1', link: Paths.Users, title: 'Create User' },
      {
        key: 'user-2',
        link: Paths.Users,
        title: 'User Management',
        activePaths: [`${LayoutPaths.Admin}${Paths.Users}`],
      },
    ],
  },
  {
    key: 'keywords',
    title: 'Keywords',
    icon: <UnorderedListOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { key: 'keywords-1', link: Paths.Home, title: 'Keywords 1' },
      { key: 'keywords-2', link: Paths.Home, title: 'Keywords 2' },
    ],
  },
  {
    key: 'apps',
    title: 'Apps',
    icon: <CheckCircleOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { key: 'apps-1', link: Paths.Home, title: 'Apps 1' },
      { key: 'apps-2', link: Paths.Home, title: 'Apps 2' },
    ],
  },
  {
    key: 'partners',
    title: 'Partners',
    icon: <WarningOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { key: 'partners-1', link: Paths.Home, title: 'Partners 1' },
      { key: 'partners-2', link: Paths.Home, title: 'Partners 2' },
    ],
  },
  {
    key: 'promo',
    title: 'Promo code',
    icon: <HighlightOutlined />,
    link: Paths.Home,
    disabled: true,
    children: [
      { key: 'promo-1', link: Paths.Home, title: 'Promo code 1' },
      { key: 'promo-2', link: Paths.Home, title: 'Promo code 2' },
    ],
  },
];

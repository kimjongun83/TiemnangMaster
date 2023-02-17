import { Paths } from '@/pages/routers';

const fakeDataHeader = [
  { key: 1, link: Paths.AboutUs, activePaths: [Paths.AboutUs], title: 'Về Chúng Tôi' },
  { key: 2, link: Paths.Article, activePaths: [Paths.Article], title: 'Bài Viết' },
  { key: 3, link: Paths.Home, activePaths: [Paths.Home], title: 'Thư Viện Tâm Sách' },
  { key: 4, link: Paths.Courses, activePaths: [Paths.Courses], title: 'Khóa Học Kỹ Năng' },
  { key: 5, link: Paths.Consulting, activePaths: [Paths.Consulting], title: 'Tư vấn Tâm Lý' },
];
export default fakeDataHeader;

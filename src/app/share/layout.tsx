import ContentLayout from '@/app/share/_components/ContentLayout';

export default function Layout({children}: {children: React.ReactNode}) {
  return <ContentLayout title={'지식정보'}>{children}</ContentLayout>;
}

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ContentLayout({title, children}: Props) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '18px',
      }}
    >
      <div
        style={{
          padding: '1.8rem 1.6rem',
          borderBottom: '1px solid rgba(58, 60, 114, 0.1)',
        }}
      >
        <h2 style={{fontSize: '1.4rem', fontWeight: 600, color: '#223475'}}>{title}</h2>
      </div>
      <div
        style={{
          padding: '0 1.6rem 2.4rem',
        }}
      >
        {children}
      </div>
    </div>
  );
}

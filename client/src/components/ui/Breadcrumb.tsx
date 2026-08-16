interface BreadcrumbProps {
  items: { label: string; url?: string }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container breadcrumb__inner">
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.url ? (
              <a href={item.url}>{item.label}</a>
            ) : (
              <span className="breadcrumb__current" aria-current="page">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="breadcrumb__sep" aria-hidden="true">›</span>}
          </div>
        ))}
      </div>
    </nav>
  );
};
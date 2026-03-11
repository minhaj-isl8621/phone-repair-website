const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`section-heading ${centered ? 'text-center' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
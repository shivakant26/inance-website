const RightSection = ({className,image, alt}) => {
  return (
    <div className={className}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default RightSection;

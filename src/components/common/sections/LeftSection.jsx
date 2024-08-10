import Button from "../Button";
const LeftSection = ({ className, data, btnlinkClass }) => {
  return (
    <div className={className}>
      <h2>{data.heading}</h2>
      <p>{data.description}</p>
      <Button type="link" className={btnlinkClass}>
        {data.linklable}
      </Button>
    </div>
  );
};

export default LeftSection;

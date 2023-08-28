const MarketCard = (props) => {
  return (
    <>
      <div className="mb-5">
        <div className="d-flex flex-column align-items-center">
          <img
            src={props.image}
            alt="goods"
            width="200px"
            height="230px"
            style={{ borderRadius: "20px" }}
          />
          <div className="d-flex flex-column gap-0">
            <strong>रू {props.price}</strong>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {props.title}
            </p>
            <small style={{ fontSize: "12px" }}>Kathmandu, Nepal</small>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketCard;

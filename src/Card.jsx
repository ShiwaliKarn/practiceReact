const Card = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <img src={props.img} alt="" />
      <p>{props.content}</p>
    </div>
  );
};

export default Card;

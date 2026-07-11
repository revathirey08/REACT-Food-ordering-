function FoodCard(props) {

  return (

    <div className="card">

      <h2>
        {props.name ? props.name : "Food Name Not Available"}
      </h2>

      <h3>Price : ₹{props.price}</h3>

      <h3>Rating : ⭐ {props.rating}</h3>

      {props.available ? (
        <p className="available">Available</p>
      ) : (
        <p className="notavailable">Out of Stock</p>
      )}

      <button
        onClick={props.add}
        disabled={!props.available}
      >
        Add To Cart
      </button>

    </div>

  );
}

export default FoodCard;
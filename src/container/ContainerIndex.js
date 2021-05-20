import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../services/action/Action";
import ReduxMain from "../components/ReduxMain";
const mapStateToProps = (state) => ({
  cardData: state,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandle: (data) => dispatch(addToCart(data)),
  removeFromCartHandle: (data) => dispatch(removeFromCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxMain);

import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { useNavigate } from "react-router-dom";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
const ShippingPage = (props) => {
  const navigate = useNavigate();
  const showContactData = () => {
    //this.props.history.replace("/ship/contact");
    navigate("/ship/contact", { replace: true });
  };

  const cancelOrder = () => {
    //this.props.history.goBack();
    navigate(-1);
  };
  return (
    <ShippingPage1
      {...props}
      showContactData={showContactData}
      cancelOrder={cancelOrder}
    />
  );
};

class ShippingPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
    };
  }

  handleShowContactData = () => {
    this.setState((prevState) => ({
      showContact: !prevState.showContact,
    }));
    this.props.showContactData();
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Таны захиалга амттай байх болно гэж найдаж байна...</strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Дүн : {this.props.price}₮</strong>
        </p>

        <Burger />

        <Button
          daragdsan={this.props.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />

        <Button
          daragdsan={this.handleShowContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        {this.state.showContact && <ContactData />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(ShippingPage);

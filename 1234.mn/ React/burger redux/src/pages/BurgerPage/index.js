import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

const BurgerPage = (props) => {
  const navigate = useNavigate();
  const continueOrder = () => {
    navigate("/ship", { replace: true });
  };
  return <BurgerPage1 onContinue={continueOrder} />;
};

class BurgerPage1 extends Component {
  state = {
    confirmOrder: false,
    loading: false, // Ensure loading is defined
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.props.onContinue}
            />
          )}
        </Modal>
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ortsHasah={this.props.burgereesOrtsHas}
          ortsNemeh={this.props.burgertOrtsNem}
        />
      </div>
    );
  }
}

export default BurgerPage;

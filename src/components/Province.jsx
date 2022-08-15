import React from "react";
import { Modal, Button, Input} from 'antd';
import '../css/Province.css';

class Province extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
    };
  } 

  showModal = () => {
    this.setState({
      visibleModal: true,
    });
  };

  handleOk = (e) => {
    this.props.input(this.state.provinceModal);
    this.setState({
      visibleModal: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModal: false,
    });
  };

  provinceChange = (e) => {
    console.log(e.target.value);
    this.setState({
      provinceModal: e.target.value,
    })
  }

  render() {

    return (
      <div className="button-widget">
        <Button type="primary" onClick={this.showModal}>
          Select Province
        </Button>
        <Modal
          title="Province Name"
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input type="string" addonBefore="Name"
            onChange = {this.provinceChange} />
        </Modal>
      </div>
    );
  }
};

export default Province;
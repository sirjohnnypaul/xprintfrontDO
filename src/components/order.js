import React, {Component} from "react";
import "./Order.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Order = () => {

  let fileName;
  const fileInputRef = React.createRef();
  let file;
  let deliveryDate;
  let fileUploaded = false;
  let name;
  let todaysDate = new Date();
  handleChangeDate = handleChangeDate.bind(this);

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  function handleChangeDate(date) {
    deliveryDate = date;
    console.log(deliveryDate);
  }

  const onFilesAdded = evt => {
    file = evt.target.files;
    name = file.item(0).name;
    fileUploaded = true;
    console.log(name);
  };

  const checkAndSend = () => {
    console.log("send file");
    fetch("https://path/to/api", {
      method: "POST",
      body: file
    })
      .then(response => response.json())
      .then(success => {
        //sukces
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="order d-flex">
        <section className="order-left">
          <h1 className="mb-4"> New printing order </h1>

          <div class="dataCollectSection">
          <p className="inputDescription">Input the order title or short message</p>
        <div class="input-group input-group-center pb-3 col-xs-11 col-md-10">
          <textarea type="text" class="form-control bg-custom-input" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <p className="inputDescription">Choose printing option</p>

        <div class="input-group input-group-center pb-3 col-xs-11 col-md-10">
          <select class="custom-select bg-custom-input" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Black & White 2-side</option>
            <option value="2">Black & White 1-side</option>
            <option value="3">Color 2-side</option>
            <option value="4">Color 1-side</option>
            <option value="5">Picture, Graphics, Poster</option>
          </select>
        </div>

        <p className="inputDescription">Upload the file in PDF or JPG!</p>
        <div class="input-group input-group-center pb-3 col-xs-11 col-md-10">
                <input className="form-control bg-custom-input inputFile" type="file" name="file_upload" ref={fileInputRef} onChange={onFilesAdded} />
        </div> 

        <p className="inputDescription">Choose payment option</p>

        <div class="input-group input-group-center pb-3 col-xs-11 col-md-10"> 
          <select class="custom-select bg-custom-input" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Card</option>
            <option value="2">Online Transfer</option>
          </select>
        </div>

        <p className="inputDescription">Choose delivery type</p>

      <div class="input-group input-group-center mb-3 col-xs-11 col-md-10">
      <select class="custom-select bg-custom-input" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">Pickup in Printing Point</option>
        <option value="2">Post Delivery</option>
      </select>
    </div>
    
    <p className="inputDescription mt-3">Choose delivery date</p>

    <div class="input-group input-group-center col-12 p-none m-auto text-center">
    <DatePicker className="bg-custom-input datepicker p-2 ml-5"
    selected={todaysDate}
    onChange={handleChangeDate}/>
    </div>
    </div>
        </section>
        <section className="order-right">
        <div className="orderContent">
          <div className="order-data">
            <div className="orderElement">
              <p className="mr-2">Pages:</p>
              <span>78</span>
            </div>
            <div className="orderElement">
              <p className="mr-2"> Type:   </p>
              <span>Color(25) Black(53)</span>
            </div>
            <div className="orderElement">
              <p className="mr-2"> Delivery: </p>
              <span>Pickup (Bażyńskiego)</span>
            </div>
            <div className="orderElement">
              <p className="mr-2"> Date: </p>
              <span>20.07.2019</span>
            </div>
            <div className="order-price mt-2 pt-1 mb-2 pb-1">
              Price: <span> 77 PLN </span>
            </div>

            <button className="order-button mt-3" onClick={checkAndSend}>
              Pay and Order
            </button>
          </div>
          </div>
        </section>
    </div>
  );
};

export default Order;

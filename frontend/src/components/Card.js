"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
const Modal_1 = __importDefault(require("./Modal"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const cars_api_1 = require("../store/cars/cars.api");
require("../assets/scss/Card.scss");
const Card = ({ element }) => {
    var _a;
    const userName = localStorage.getItem("username");
    const loggedInUser = userName ? JSON.parse(userName) : "";
    const dispatch = (0, react_redux_1.useDispatch)();
    const { carImage, dealer, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, oemSpec, originalPaint, registrationPlace, _id, } = element;
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const handleDelete = () => {
        dispatch((0, cars_api_1.deleteCarApi)(_id)); // call the action for deleting a specific car
    };
    // close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // open modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    return (<div className="card-container">
      <div className="oemSpecs-container">
        <div>
          <img src={carImage} alt="Car Image"/>
        </div>
        <div>
          <div>
            <span>Brand</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.brand}</span>
          </div>
          <div>
            <span>Model</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.model}</span>
          </div>
          <div>
            <span>Price</span>
            <span>₹{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.listPrice} /-</span>
          </div>
          <div>
            <span>Max Speed</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.maxSpeed} KM/H</span>
          </div>
          <div>
            <span>Mileage</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.mileage}</span>
          </div>
          <div>
            <span>Power</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.power} BHP</span>
          </div>
          <div>
            <span>Official Launch</span>
            <span>{oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.year}</span>
          </div>
          <div>
            <span>Colors</span>
            import React from 'react';
            import './Card.css'; // Import external CSS file for styling

            // Rest of the code...

            {(_a = oemSpec === null || oemSpec === void 0 ? void 0 : oemSpec.colors) === null || _a === void 0 ? void 0 : _a.map((ele, i) => {
            return (<span key={i} className="color-dot" // Add a CSS class for styling
             style={{
                    backgroundColor: ele.toLowerCase(),
                }}></span>);
        })}
          </div>
        </div>
      </div>
      <hr />
      <div className="dealer-container">
        <div>
            <div className="dealer-name">
            <span>Dealer: </span>
          <span>{dealer === null || dealer === void 0 ? void 0 : dealer.username.toUpperCase()}</span>
            </div>
         

          <div className="dealer-buy-edit">
            {/* If the user is the dealer then only the user can see the edit and delete button */}
            {loggedInUser !== (dealer === null || dealer === void 0 ? void 0 : dealer.username) ? (<div className="buyNow-btn">
                <button>Buy Now</button>
              </div>) : (<div className="edit-del-btn">
                <button onClick={openModal}>
                  <span>Edit</span>
                  <ai_1.AiFillEdit />
                </button>
                <button onClick={handleDelete}>
                  <span>Delete</span>
                  <md_1.MdDeleteOutline />
                </button>
              </div>)}
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>Scratches : </span>
              <span>{!majorScratches ? "-" : majorScratches}</span>
            </div>
            <div>
              <span>No. Of Accidents : </span>
              <span>{noOfAccidents}</span>
            </div>
            <div>
              <span>No. Of Owners :</span>
              <span>{noOfPreviousBuyers}</span>
            </div>
            <div>
              <span>Odometer :</span>
              <span>{odometer}</span>
            </div>
            <div>
              <span>Original Paint :</span>
              <span>{originalPaint ? "Original" : "Repainted"}</span>
            </div>
            <div>
              <span>Registered At :</span>
              <span>{registrationPlace}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit modal */}
      <Modal_1.default isOpen={isModalOpen} onClose={closeModal} element={element}/>
    </div>);
};
exports.default = Card;

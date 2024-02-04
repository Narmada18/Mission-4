"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const rx_1 = require("react-icons/rx");
const react_redux_1 = require("react-redux");
const react_2 = __importDefault(require("react"));
const cars_api_1 = require("../store/cars/cars.api");
require("../assets/scss/modal.scss");
const Modal = ({ isOpen, onClose, element }) => {
    const { carImage, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, originalPaint, registrationPlace, _id } = element;
    const dispatch = (0, react_redux_1.useDispatch)();
    const [image, setImage] = (0, react_1.useState)(carImage);
    const [newOdometer, setNewOdometer] = (0, react_1.useState)(odometer);
    const [newScratches, setNewScratches] = (0, react_1.useState)(majorScratches);
    const [newOriginalPaint, setNewOriginalPaint] = (0, react_1.useState)(originalPaint);
    const [newNoOfAccidents, setNewNoOfAccidents] = (0, react_1.useState)(noOfAccidents);
    const [newNoOfPrevBuyers, setNewNoOfPrevBuyers] = (0, react_1.useState)(noOfPreviousBuyers);
    const [newRegistrationPlace, setNewRegistrationPlace] = (0, react_1.useState)(registrationPlace);
    const handleEdit = (e) => {
        e.preventDefault();
        const update = {};
        if (image !== carImage)
            update.carImage = image;
        if (+newOdometer !== odometer)
            update.odometer = +newOdometer;
        if (newScratches !== majorScratches)
            update.majorScratches = newScratches;
        if (newOriginalPaint !== originalPaint)
            update.originalPaint = newOriginalPaint;
        if (+newNoOfAccidents !== noOfAccidents)
            update.noOfAccidents = +newNoOfAccidents;
        if (+newNoOfPrevBuyers !== noOfPreviousBuyers)
            update.noOfPreviousBuyers = +newNoOfPrevBuyers;
        if (newRegistrationPlace !== registrationPlace)
            update.registrationPlace = newRegistrationPlace;
        dispatch((0, cars_api_1.updateCarApi)({ carId: _id, update }));
        onClose();
    };
    if (!isOpen)
        return null;
    return (<div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit car info</h2>
          <rx_1.RxCrossCircled style={{ cursor: 'pointer' }} onClick={onClose}/>
        </div>
        <div className="modal-body">
          <form className='edit-form' onSubmit={handleEdit}>
            <input type="url" id="image" placeholder="Image of the car" value={image} onChange={(e) => setImage(e.target.value)}/>
            <input type="number" id="odometer" placeholder="Odometer's current value" value={newOdometer} onChange={(e) => setNewOdometer(+e.target.value)}/>
            <input type="text" id="scratches" placeholder="Major Scratches" value={newScratches} onChange={(e) => setNewScratches(e.target.value)}/>
            <div>
              <label htmlFor="originalPaint">Original Paint </label>
              <input type="checkbox" name="originalPaint" id="originalPaint" checked={newOriginalPaint} onChange={(e) => setNewOriginalPaint(e.target.checked)}/>
            </div>
            <input type="number" id="noOfAccidents" placeholder="No of Accidents" value={newNoOfAccidents} onChange={(e) => setNewNoOfAccidents(+e.target.value)}/>
            <input type="number" id="noOfprevBuyers" placeholder="No of Previous Buyers" value={newNoOfPrevBuyers} onChange={(e) => setNewNoOfPrevBuyers(+e.target.value)}/>
            <input type="text" id="registrationPlace" placeholder="Registration Place" value={newRegistrationPlace} onChange={(e) => setNewRegistrationPlace(e.target.value)}/>
            <input type="submit" value="Update car details 🚗"/>
          </form>
        </div>
      </div>
    </div>);
};
exports.default = Modal;

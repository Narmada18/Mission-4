"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const cars_api_1 = require("../store/cars/cars.api");
const react_1 = require("react");
require("../assets/scss/createCar.scss");
function CreateCar({ oemId }) {
    const { loading } = (0, react_redux_1.useSelector)((store) => store.authManager);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [carImage, setCarImage] = (0, react_1.useState)('');
    const [odometer, setOdometer] = (0, react_1.useState)(0);
    const [majorScratches, setMajorScratches] = (0, react_1.useState)('');
    const [originalPaint, setOriginalPaint] = (0, react_1.useState)(false);
    const [noOfAccidents, setNoOfAccidents] = (0, react_1.useState)(0);
    const [noOfPreviousBuyers, setNoOfPreviousBuyers] = (0, react_1.useState)(0);
    const [registrationPlace, setRegistrationPlace] = (0, react_1.useState)('');
    const handleCreateCar = (e) => {
        e.preventDefault();
        const CarObj = {
            oemSpec: oemId,
            carImage,
            odometer,
            majorScratches,
            originalPaint,
            registrationPlace,
        };
        if (noOfAccidents)
            CarObj.noOfAccidents = noOfAccidents;
        if (noOfPreviousBuyers)
            CarObj.noOfPreviousBuyers = noOfPreviousBuyers;
        dispatch((0, cars_api_1.createCarApi)(CarObj)); // call an action for the car doc creation
        // Reset the form
        setCarImage('');
        setOdometer(0);
        setMajorScratches('');
        setOriginalPaint(false);
        setNoOfAccidents(0);
        setNoOfPreviousBuyers(0);
        setRegistrationPlace('');
    };
    return (<div className="createCar">
      <h3>Sell car with selected OEM (Original Equipment Manufacturers Specifications)</h3>
      <form onSubmit={handleCreateCar}>
        <label htmlFor="image">Image of the car:</label>
        <input type="url" id="image" placeholder="Image of the car" value={carImage} onChange={(e) => setCarImage(e.target.value)} required/>

        <label htmlFor="odometer">Odometer's current value:</label>
        <input type="number" id="odometer" placeholder="Odometer's current value" value={odometer} onChange={(e) => setOdometer(+e.target.value)} required/>

        <label htmlFor="scratches">Major Scratches:</label>
        <input type="text" id="scratches" placeholder="Major Scratches" value={majorScratches} onChange={(e) => setMajorScratches(e.target.value)} required/>

        <div>
          <label htmlFor="originalPaint">Original Paint:</label>
          <input type="checkbox" name="originalPaint" id="originalPaint" checked={originalPaint} onChange={(e) => setOriginalPaint(e.target.checked)}/>
        </div>

        <label htmlFor="noOfAccidents">No of Accidents:</label>
        <input type="number" id="noOfAccidents" placeholder="No of Accidents" value={noOfAccidents} onChange={(e) => setNoOfAccidents(+e.target.value)}/>

        <label htmlFor="noOfPreviousBuyers">No of Previous Buyers:</label>
        <input type="number" id="noOfPreviousBuyers" placeholder="No of Previous Buyers" value={noOfPreviousBuyers} onChange={(e) => setNoOfPreviousBuyers(+e.target.value)}/>

        <label htmlFor="registrationPlace">Registration Place:</label>
        <input type="text" id="registrationPlace" placeholder="Registration Place" value={registrationPlace} onChange={(e) => setRegistrationPlace(e.target.value)} required/>

        <input disabled={loading} type="submit" value={loading ? 'Please Wait...' : 'Sell Car'}/>
      </form>
    </div>);
}
exports.default = CreateCar;

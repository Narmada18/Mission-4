"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const bs_1 = require("react-icons/bs");
const react_1 = require("react");
const CreateCar_1 = __importDefault(require("../components/CreateCar"));
const oems_api_1 = require("../store/oems/oems.api");
require("../assets/scss/sellCar.scss");
const Navbar_1 = __importDefault(require("../components/Navbar"));
function SellCar() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { loading, data } = (0, react_redux_1.useSelector)((store) => store.oemsManager);
    const searchRef = (0, react_1.useRef)(null);
    const [selectedOem, setSelectedOem] = (0, react_1.useState)("");
    const [queryString, setQueryString] = (0, react_1.useState)("");
    const handleSearch = () => {
        var _a, _b;
        let url = "";
        if ((_a = searchRef.current) === null || _a === void 0 ? void 0 : _a.value)
            url += `q=${(_b = searchRef.current) === null || _b === void 0 ? void 0 : _b.value}`;
        setQueryString(url);
    };
    (0, react_1.useEffect)(() => {
        dispatch((0, oems_api_1.getAllOemsApi)(queryString));
    }, [dispatch, queryString]);
    return (<>
    <Navbar_1.default />
    <div className="sellCar">
      <div className="queryContainer">
        <div className="searchContainer">
          <input type="search" placeholder="Search here!" ref={searchRef}/>
          <span className='bs-search'><bs_1.BsSearch onClick={handleSearch}/></span>
          
        </div>
      </div>

      {/* OEM specs */}
      {loading ? (<img className='loadingGif' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading..."/>) : (<div className="oemSpecsContainer">
          <table>
            <caption>Original Equipment Manufacturers Specifications</caption>
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>List-Price</th>
                <th>Colors</th>
                <th>Mileage</th>
                <th>Power (in BHP)</th>
                <th>Max-speed</th>
                <th>Choose</th>
              </tr>
            </thead>

            <tbody>
              {data === null || data === void 0 ? void 0 : data.map((el, indx) => {
                var _a;
                return (<tr key={el._id}>
                  <td>{indx + 1}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.brand}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.model}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.year}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.listPrice}</td>
                  <td>
                    {(_a = el === null || el === void 0 ? void 0 : el.colors) === null || _a === void 0 ? void 0 : _a.map((ele, i) => (<span key={i} style={{
                            height: "20px",
                            width: "20px",
                            border: "1px solid gray",
                            borderRadius: "50%",
                            backgroundColor: ele.toLowerCase(),
                            display: 'inline-block',
                            marginRight: "5px"
                        }}></span>))}
                  </td>
                  <td>{el === null || el === void 0 ? void 0 : el.mileage}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.power}</td>
                  <td>{el === null || el === void 0 ? void 0 : el.maxSpeed}</td>
                  <td>
                    <button style={{
                        backgroundColor: `${el._id === selectedOem ? "#033aff" : "white"}`,
                        color: `${el._id === selectedOem ? "white" : "#033aff"}`
                    }} onClick={() => {
                        setSelectedOem(el._id);
                    }}>
                      Choose OEM
                    </button>
                  </td>
                </tr>);
            })}
            </tbody>
          </table>
        </div>)}

      {/* show the create form only when you selected any OEM */}
      {selectedOem && <CreateCar_1.default oemId={selectedOem}/>}
    </div>
    </>);
}
exports.default = SellCar;

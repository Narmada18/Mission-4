"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const bs_1 = require("react-icons/bs");
const Card_1 = __importDefault(require("../components/Card"));
const cars_api_1 = require("../store/cars/cars.api");
const Navbar_1 = __importDefault(require("../components/Navbar"));
require("../assets/scss/Home.scss");
const debouncer = (cb, delay) => {
    let timerRef;
    return () => {
        if (timerRef) {
            clearTimeout(timerRef);
            timerRef = undefined;
        }
        timerRef = setTimeout(cb, delay);
    };
};
function Home() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { loading, data } = (0, react_redux_1.useSelector)((store) => store.carsManager);
    const searchRef = (0, react_1.useRef)(null);
    const colorRef = (0, react_1.useRef)(null);
    const minpriceRef = (0, react_1.useRef)(null);
    const maxpriceRef = (0, react_1.useRef)(null);
    const minmileageRef = (0, react_1.useRef)(null);
    const maxmileageRef = (0, react_1.useRef)(null);
    const [queryUrl, setQueryUrl] = (0, react_1.useState)("");
    const createQueryUrl = () => {
        var _a, _b, _c, _d, _e, _f;
        let url = "";
        if ((_a = searchRef.current) === null || _a === void 0 ? void 0 : _a.value)
            url += `q=${searchRef.current.value}`;
        if ((_b = colorRef.current) === null || _b === void 0 ? void 0 : _b.value)
            url += `color=${colorRef.current.value}`;
        if ((_c = minpriceRef.current) === null || _c === void 0 ? void 0 : _c.value)
            url += `minprice=${minpriceRef.current.value}`;
        if ((_d = maxpriceRef.current) === null || _d === void 0 ? void 0 : _d.value)
            url += `maxprice=${maxpriceRef.current.value}`;
        if ((_e = minmileageRef.current) === null || _e === void 0 ? void 0 : _e.value)
            url += `minmileage=${minmileageRef.current.value}`;
        if ((_f = maxmileageRef.current) === null || _f === void 0 ? void 0 : _f.value)
            url += `maxmileage=${maxmileageRef.current.value}`;
        setQueryUrl(url);
    };
    const debounce = debouncer(createQueryUrl, 600);
    (0, react_1.useEffect)(() => {
        dispatch((0, cars_api_1.getAllCarsApi)(queryUrl));
    }, [queryUrl, dispatch]);
    return (<>
    <Navbar_1.default />
    <div className='home'>
      <div className="queries">
        <div className="search">
          <input type="search" placeholder='Search Model here!' ref={searchRef} onInput={debounce}/>
          <span><bs_1.BsSearch onClick={createQueryUrl}/></span>
        </div>

        {/* Choose color */}
        <select className='color-select' ref={colorRef} onChange={debounce} title="Choose color">
          <option value="">Choose color</option>
          <option value="White">White</option>
          <option value="Silver">Silver</option>
          <option value="Black">Black</option>
          <option value="Gray">Gray</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>

        {/* Filter on Pricing */}
        <div className="price-filter">
          <span>Price:</span>
          <span>
            <input type="number" placeholder='Min price' min={0} ref={minpriceRef} onInput={debounce}/>
            <input type="number" placeholder='Max price' min={0} ref={maxpriceRef} onInput={debounce}/>
          </span>
        </div>

        {/* Filter on Mileage */}
        <div className="mileage-filter">
          <span>Mileage:</span>
          <span>
            <input type="number" placeholder='Min mileage' min={0} ref={minmileageRef} onInput={debounce}/>
            <input type="number" placeholder='Max mileage' min={0} ref={maxmileageRef} onInput={debounce}/>
          </span>
        </div>
      </div>
      {/* map cars */}
      {loading ? <img className='loadingGif' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading..."/> : (<div className="cars">
          {data === null || data === void 0 ? void 0 : data.map((el) => <Card_1.default key={el._id} element={el}/>)}
        </div>)}
    </div>
    </>);
}
exports.default = Home;

const Filter = () => {
  return (
    <div className="p-[20px] bg-white mt-[30px] rounded-[20px] border border-[#dbe3e8] text-[#1f2533]">
      <h4 className="">Filter:</h4>
      <div className="filter__content">
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Category</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Womens
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Mens
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Kids
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Fitness
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Sports
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Fangear
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Kids
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Brand</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Adidas
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Asics
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Brooks
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Deuce
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Gray-Nicolls
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Hoka
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Price</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> 0 to $99
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> $100 to $199
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Recently</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> New
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Promotions</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> 30% Off
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> 50% Off
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Availability</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> In Stock
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" /> Out of Stock
                </label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;

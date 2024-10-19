import "./App.css";
function App() {
  return (
    <>
      {/* <div className="grid grid-cols-8 grid-rows-6">  */}
      <div className="flex">
        <div className="bg-[#201f24] rounded-lg col-span-2 ">
          {/* heading */}
          <div>
            <h2 className="font-bold text-3xl pb-[50px] pt-[25px] pl-[25px] text-left">
              finance
            </h2>
          </div>
          {/* options */}
          <div className="flex flex-col h-5/6 justify-between ">
            <div className="rounded-lg">
              <div className="flex items-start gap-2 ">
                <div className="text-[#201f24] text-sm font-semibold bg-orange-100 rounded-r-lg pl-[30px] pr-[150px] py-[15px] mr-6 ">
                  Overview
                </div>
              </div>

              <div className="flex items-center gap-2 px-[22px] py-[10px]">
                <div>O</div>
                <div className="text-gray-400 text-sm font-semibold">
                  Transactions
                </div>
              </div>

              <div className="flex items-center gap-2 px-[22px] py-[10px]">
                <div>O</div>
                <div className="text-gray-400 text-sm font-semibold">
                  Budgets
                </div>
              </div>

              <div className="flex items-center gap-2 px-[22px] py-[10px]">
                <div>O</div>
                <div className="text-gray-400 text-sm font-semibold">Pots</div>
              </div>

              <div className="flex items-center gap-2 px-[22px] py-[10px]">
                <div>O</div>
                <div className="text-gray-400 text-sm font-semibold">
                  Recurring Bills
                </div>
              </div>
            </div>
            {/* bottom menu */}
            <div>
              <p className="text-gray-400 text-sm font-semibold">
                Minimize Menu
              </p>
            </div>
          </div>
        </div>

        {/* OverView */}
        <div className="bg-[#f8f5f0] px-6 col-span-6">
          <h2 className="text-[#201f24] font-bold text-3xl text-left pt-[35px] pb-[35px]">
            Overview
          </h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* 1st card */}
            <div className="bg-[#201f24] flex flex-col items-start gap-[9px] px-6 py-6 rounded-lg">
              <span className="">Current Balance</span>
              <p className="font-bold text-2xl">$4,836.00</p>
            </div>
            {/* 2nd card */}
            <div className="flex flex-col items-start gap-[9px] px-6 py-6 bg-white text-black rounded-lg">
              <span>Income</span>
              <p className="font-bold text-2xl">$3,814.25</p>
            </div>
            {/* 3rd card */}
            <div className="flex flex-col items-start gap-[9px] px-6 py-6 bg-white text-black rounded-lg">
              <span>Expenses</span>
              <p className="font-bold text-2xl">$1,700.50</p>
            </div>
          </div>
          {/* 4 Grids */}

          <div className="grid grid-cols-5 grid-rows-3 gap-4">
            {/* 1. Pots */}
            <div className="col-span-3">
              <div className=" bg-white  text-black rounded-lg p-6">
                {/* Saved */}
                <div className="flex items-center justify-between pb-6 text-sm">
                  <h2 className="flex-1 text-left font-bold text-lg">Pots</h2>
                  <p className="flex-none w-20 text-xs text-slate-400 ">
                    See Details
                  </p>
                  <img
                    src="/assets/caret-right-icon.png"
                    alt=""
                    className="w-2 pb-[3px]"
                  />
                </div>

                {/* 4 pots */}
                <div className="flex text-xs">
                  <div className="flex items-center mr-4 px-4 bg-[#f8f5f0] rounded-lg w-52 ">
                    <div className="flex w-9 ">
                      <img
                        src="/assets/date_business_money_payment_salary_calendar_day_icon_254031-removebg-preview (1).png"
                        alt=""
                      />
                    </div>
                    <div className="pl-4">
                      <p className="text-left">Total Saved</p>
                      <p className="font-extrabold text-4xl pt-2">$850</p>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-2 gap-x-3
                  "
                  >
                    <div className="border-l-4 border-[#277c77] ml-1 pl-3">
                      <p className="text-left">Savings</p>
                      <p className="text-left font-extrabold text-sm">$159</p>
                    </div>
                    <div className="border-l-4 border-[#81c8d7] ml-5 pl-3">
                      <p className="text-left">Gift</p>
                      <p className="text-left font-extrabold text-sm">$40</p>
                    </div>
                    <div className="border-l-4 border-[#625f70] ml-1 pl-3 mt-4">
                      <p className="text-left">Concert Ticket</p>
                      <p className="text-left font-extrabold text-sm">$159</p>
                    </div>
                    <div className="border-l-4 border-[#f1cdab] ml-5 pl-3 mt-4">
                      <p className="text-left">New Laptop</p>
                      <p className="text-left font-extrabold text-sm">$10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Budgets */}
            <div className="row-span-2 col-span-2 bg-white  p-6">
              <div className="flex items-center justify-between pb-6 text-sm">
                <h2 className="flex-1 text-left font-bold text-lg text-black">
                  Budgets
                </h2>
                <p className="flex-none w-20 text-xs text-slate-400 ">
                  See Details
                </p>
                <img
                  src="/assets/caret-right-icon.png"
                  alt=""
                  className="w-2 pb-[3px]"
                />
              </div>
              <div className="flex items-center justify-around text-black rounded-lg pt-6">
                <div className="flex justify-center items-center">
                  <img
                    src="/assets/Screenshot_From_2024-10-19_16-08-35-removebg-preview.png"
                    alt=""
                  />
                </div>
                {/* Details 4 */}
                <div className="text-left text-xs">
                  <div className="border-l-4 border-[#277c77] ml-1 pl-2">
                    <p>Entertainment</p>
                    <p className=" font-extrabold text-sm">$50.00</p>
                  </div>

                  <div className="border-l-4 border-[#81c8d7] ml-1 pl-2 mt-3">
                    <p>Bills</p>
                    <p className=" font-extrabold text-sm">$750.00</p>
                  </div>

                  <div className="border-l-4 border-[#625f70] ml-1 pl-2 mt-3">
                    <p>Dining Out</p>
                    <p className=" font-extrabold text-sm">$75.00</p>
                  </div>

                  <div className="border-l-4 border-[#f1cdab] ml-1 pl-2 mt-3">
                    <p>Personal Care</p>
                    <p className=" font-extrabold text-sm">$100.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Transactions */}
            <div className="row-span-3 col-span-3 ">
              <div className="grid grid-col-2  bg-white text-black rounded-lg p-6">
                <div className="flex items-center justify-between pb-6 text-sm">
                  <h2 className="flex-1 text-left font-bold text-lg">
                    Transactions
                  </h2>
                  <p className="flex-none w-20 text-xs text-slate-400 ">
                    View All
                  </p>
                  <img
                    src="/assets/caret-right-icon.png"
                    alt=""
                    className="w-2 pb-[3px]"
                  />
                </div>
                {/*Profiles */}
                <div className="flex flex-col gap-4 text-xs">
                  {/* profile-1 */}
                  <div className=" flex justify-between items-end border-b-2 pb-5 pt-2">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/assets/1.jpg"
                        alt=""
                        className="w-10 rounded-3xl"
                      />
                      <p className="text-left font-bold">Emma Richardson</p>
                    </div>
                    <div className="text-right">
                      <p className="pb-2 font-bold text-[#277c77] ">+$75.50</p>
                      <p>19 Aug 2024</p>
                    </div>
                  </div>

                  {/* profile-2 */}

                  <div className="flex justify-between items-end border-b-2 pb-5 pt-2">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/assets/2.jpg"
                        alt=""
                        className="w-10 rounded-3xl"
                      />{" "}
                      <p className="text-left font-bold">Savory Bites Bistro</p>
                    </div>
                    <div className="text-right">
                      <p className="pb-2 font-bold">+$55.50</p>
                      <p>19 Aug 2024</p>
                    </div>
                  </div>

                  {/* profile-3 */}

                  <div className="flex justify-between items-end border-b-2 pb-5 pt-2">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/assets/3.jpg"
                        alt=""
                        className="w-10 rounded-3xl"
                      />{" "}
                      <p className="text-left font-bold">Daniel Carter</p>
                    </div>
                    <div className="text-right">
                      <p className="pb-2 font-extrabold">+$42.30</p>
                      <p>17 Aug 2024</p>
                    </div>
                  </div>

                  {/* profile-4 */}

                  <div className="flex justify-between items-end border-b-2 pb-5 pt-2">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/assets/4.jpg"
                        alt=""
                        className="w-10 rounded-3xl"
                      />{" "}
                      <p className="text-left font-bold">Sun Park</p>
                    </div>
                    <div className="text-right">
                      <p className="pb-2 font-bold text-[#277c77] ">+$120.00</p>
                      <p>17 Aug 2024</p>
                    </div>
                  </div>

                  {/* profile-5 */}

                  <div className="flex justify-between items-end pb-5 pt-2">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/assets/5.jpg"
                        alt=""
                        className="w-10 rounded-3xl"
                      />
                      <p className="text-left font-bold">Urban Services Hub</p>
                    </div>
                    <div className="text-right">
                      <p className="pb-2 font-bold">+$65.50</p>
                      <p>17 Aug 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Recurring Bills */}
            <div className="row-span-2 col-span-2">
              <div className=" bg-white text-black rounded-lg p-6 text-xs">
                <div className="flex items-center justify-between pb-6 text-sm">
                  <h2 className="flex-1 text-left font-bold text-lg">Recurring Bills</h2>
                  <p className="flex-none w-20 text-xs text-slate-400 ">
                    See Details
                  </p>
                  <img
                    src="/assets/caret-right-icon.png"
                    alt=""
                    className="w-2 pb-[3px]"
                  />
                </div>
                {/* 3-Bills */}
                <div className="flex flex-col gap-3">
                  {/*Bill-1*/}
                  <div className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#277c77] rounded-md">
                    <p>Pay Bills</p>
                    <p className="font-bold">$190.00</p>
                  </div>
                  {/* Bill-2*/}
                  <div className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#f1cdab] rounded-md">
                    <p>Total Upcoming</p>
                    <p className="font-bold">$194.98</p>
                  </div>
                  {/*Bill-3*/}
                  <div className="flex items-center justify-between bg-[#f8f5f0] px-3 py-3 border-l-4 border-[#81c8d7] rounded-md">
                    <p>Due Soon</p>
                    <p className="font-bold">$59.98</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

export default function CreateForm({ cookieStandInputHandler }) {
  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  return (
    <>
      <div className="text-center">
        <div className="">
          <form
            className="flex-col w-3/5 min-w-full p-3 my-5 text-center rounded-md text-[#1E2435] bg-[#A8F4D0] border-[#20D092] border-2"
            onSubmit={cookieStandInputHandler}
          >
            <fieldset>
              <div className="flex flex-row mt-3 min-w-80">
                <div className="flex flex-col mr-5 basis-2/3">
                  <label className="font-semibold" htmlFor="location">
                    ADD LOCATION
                  </label>
                  <input
                    className="text-[#1E2435] p-1 mt-1"
                    name="location"
                    placeholder="Cookie Stand Location"
                  />
                </div>
                <button className="bg-[#15B981] rounded basis-1/3 ml-5">
                  CREATE STAND
                </button>
              </div>
              <div className="flex flex-row my-3 font-semibold">
                <div className="flex flex-col px-3 mx-2 rounded-md">
                  <label htmlFor="minimum">MINIMUM CUSTOMERS PER HOUR</label>
                  <input
                    className="p-1 text-left text-[#1E2435]"
                    name="minimum"
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col px-3 mx-2 rounded-md">
                  <label htmlFor="maximum">MAXIMUM CUSTOMER PER HOUR</label>
                  <input
                    className="p-1 text-left"
                    name="maximum"
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col px-3 mx-2 rounded-md">
                  <label className="" htmlFor="average">
                    AVERAGE COOKIES PER SALE
                  </label>
                  <input
                    className="p-1 text-left"
                    name="average"
                    placeholder="0"
                  />
                </div>
                <input name="hourly" value={hourlySales} type="hidden" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

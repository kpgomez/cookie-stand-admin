export default function CreateForm({cookieStandInputHandler}) {
  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  return (
    <>
      <div className="text-center">
        <div>
          <form
            className="flex-col w-3/5 p-2 m-5 text-4xl text-center border min-w-min rounded-xl text-slate-50 bg-salmon"
            onSubmit={cookieStandInputHandler}
          >
            Create a Cookie Stand
            <fieldset>
              <div className="m-5">
                <div className="text-xl">
                  <label className="w-1/6 mr-5" for="location">
                    Location
                  </label>
                  <input
                    className="w-5/6 px-1 text-slate-500 "
                    name="location"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col px-3 py-1 mx-2 text-xl bg-nude-pink">
                  <label for="minCust">Minimum Customers per Hour</label>
                  <input
                    className="text-center text-slate-500 "
                    name="minCust"
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col px-3 py-1 mx-2 text-xl bg-nude-pink">
                  <label for="max-customers">Maximum Customers per Hour</label>
                  <input
                    className="text-center text-slate-500 "
                    name="maxCust"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col px-3 py-1 mx-2 text-xl bg-nude-pink">
                  <label className="text-1xl" for="avgCookies">
                    Average Cookies per Sale
                  </label>
                  <input
                    className="text-center text-slate-500 "
                    name="avgCookies"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col pt-9">
                  <button className="px-10 py-5 mr-5 text-2xl border-dotted bg-mauve bg-border-white border-rounded-3xl size">
                    Create
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
          {/* <div>
                <p class="text-gray-500 text-1xl">
                No Cookie Stands Available
                </p>
            </div> */}
        </div>
      </div>
    </>
  );
}

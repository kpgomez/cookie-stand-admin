export default function CreateForm({cookieStandInputHandler}) {
  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  return (
    <>
      <div className='text-center'>
        <div>
          <form
            className='flex-col w-3/5 min-w-full p-3 m-5 text-4xl text-center border rounded-md text-slate-50 bg-salmon'
            onSubmit={cookieStandInputHandler}
          >
            Create a Cookie Stand
            <fieldset className='w-full'>
              <div className='mb-3'>
                <div className='flex text-xl'>
                  <label className='w-1/6" for="location'>
                    Location
                  </label>
                  <input
                    className='w-5/6 text-slate-500'
                    name='location'
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-col px-3 mx-2 text-xl rounded-md bg-nude-pink'>
                  <label for='minCust'>Minimum Customers per Hour</label>
                  <input
                    className='text-center text-slate-500'
                    name='minCust'
                  />
                </div>

                <div className='flex flex-col px-3 mx-2 text-xl rounded-md bg-nude-pink'>
                  <label for='max-customers'>Maximum Customers per Hour</label>
                  <input
                    className='text-center text-slate-500'
                    name='maxCust'
                  />
                </div>
                <div className='flex flex-col px-3 mx-2 text-xl rounded-md bg-nude-pink'>
                  <label className='text-1xl' for='avgCookies'>
                    Average Cookies per Sale
                  </label>
                  <input
                    className='text-center text-slate-500'
                    name='avgCookies'
                  />
                </div>
                <input name='hourlySales' value={hourlySales} type='hidden'/>
                <div className='flex flex-col'>
                  <button className='px-10 py-5 mr-5 text-2xl border-dotted rounded-md bg-mauve bg-border-white border-rounded-3xl'>
                    Create
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

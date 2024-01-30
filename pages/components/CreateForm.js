export default function CreateForm({cookieStandInputHandler}) {
  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  return (
    <>
      <div className='text-center'>
        <div>
          <form
            className='flex-col w-3/5 min-w-full p-3 m-5 text-center border rounded-md text-[#1E2435] bg-[#A8F4D0]'
            onSubmit={cookieStandInputHandler}
          >
            <fieldset className=''>
              <div className='flex w-full mb-3'>
                <div className='flex flex-col'>
                  <label className='' htmlFor='location'>
                    ADD LOCATION
                  </label>
                  <input
                    className='text-[#1E2435]'
                    name='location'
                  />
                </div>
                <button className='bg-[#15B981] rounded p-2'>CREATE STAND</button>
              </div>
              <div className='flex font-semibold'>
                <div className='flex flex-col px-3 mx-2 rounded-md'>
                  <label htmlFor='minCust'>Minimum Customers per Hour</label>
                  <input
                    className='text-center text-[#1E2435]'
                    name='minCust'
                    placeholder='0'
                  />
                </div>

                <div className='flex flex-col px-3 mx-2 rounded-md'>
                  <label htmlFor='max-customers'>Maximum Customers per Hour</label>
                  <input
                    className='text-center'
                    name='maxCust'
                    placeholder='0'
                  />
                </div>
                <div className='flex flex-col px-3 mx-2 rounded-md'>
                  <label className='' htmlFor='avgCookies'>
                    Average Cookies per Sale
                  </label>
                  <input
                    className='text-center'
                    name='avgCookies'
                    placeholder='0'
                  />
                </div>
                <input name='hourlySales' value={hourlySales} type='hidden'/>
                {/* <div className='flex flex-col'>
                  <button className='px-10 py-5 mr-5 text-2xl border-dotted rounded-md bg-mauve bg-border-white border-rounded-3xl'>
                    Create
                  </button>
                </div> */}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

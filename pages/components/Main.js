export default function Main({cookieStandInputHandler}){
    return (
        <div className='text-center'>
            <div>
                <form className='w-3/5 p-2 m-5 text-4xl text-center text-white border min-w-min rounded-xl bg-salmon'
                onSubmit={cookieStandInputHandler}
                >Create a Cookie Stand
                    <fieldset>
                        <div className='m-5'>
                            <div className= 'text-xl'>
                                <label className='w-1/6 mr-5' for='locations'>Location</label>
                                <input className='w-5/6' name='locations'/>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col p-5 text-xl'>
                                <label for='min-customers'>Minimum Customers per Hour</label>
                                <input className='text-center' name='min-customers' placeholder='0' />
                            </div>
                
                            <div className='flex flex-col p-5 text-xl'>
                                <label for='max-customers'>Maximum Customers per Hour</label>
                                <input className='text-center' name='max-customers' placeholder='0' />
                            </div>
                            <div className='flex flex-col p-5 text-xl'>
                                <label className='text-1xl' for='avg-cookies'>Average Cookies per Sale</label>
                                <input className='text-center' name='avg-cookies' placeholder='0' />
                            </div>
                            <div className='flex flex-col pt-9'>
                                <button className='px-10 py-5 mr-5 text-2xl border-dotted bg-mauve bg-border-white border-rounded-3xl'>Create</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div>
                    <placeholder class='text-gray-500 text-1xl'>Report Table Coming Soon</placeholder>
                </div>
            </div>
        </div>
    )
}
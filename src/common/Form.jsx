import React from 'react'

const Form = () => {
  return (
    <>
                <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-2">
                        <h2 className="text-2xl font-semibold leading-7 ">G Mail</h2>
                        <p className="mt-1 text-sm leading-6 ">You can send your G Mail here</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                                <label for="From" className="block text-sm font-medium leading-6 ">From</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-600">
                                        <input type="text" name="from" id="from" autocomplete="from" className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder: focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith@gmail.com" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="subject" className="block text-sm font-medium leading-6 ">Subject</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-600">
                                        <input type="text" name="subject" id="subject" autocomplete="subject" className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder: focus:ring-0 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="Message" className="block text-sm font-medium leading-6 ">Message</label>
                                <div className="mt-2">
                                    <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 px-2 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-1 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 ">Cancel</button>
                        <button type="submit" className="border-2 border-amber-300 px-5 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600">Send</button>
                    </div>
                    </div>
            </form>
    </>
  )
}

export default Form
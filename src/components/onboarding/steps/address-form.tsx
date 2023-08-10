import React from "react";

interface AddressFormProps {
    setAddress1(address1: string): void;
    setAddress2(address2: string): void;
    setCity(city: string): void;
    setState(state: string): void;
    setZip(zip: string): void;
}

export default function AddressForm({
    setAddress1,
    setAddress2,
    setCity,
    setState,
    setZip
}: AddressFormProps) {
    return (
        <>
            <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                <label className='block font-mono text-white' htmlFor="grid-first-name">Address Line 1 *</label>
                <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="address1" type="text" placeholder="76 Sugar Land St."
                    onChange={(e) => setAddress1(e.target.value)}
                />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                <label className='block font-mono text-white' htmlFor="grid-first-name">Address Line 2 *</label>
                <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="address2" type="text" placeholder="Unit 1234"
                    onChange={(e) => setAddress2(e.target.value)}
                />
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">City *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="city" type="text" placeholder="Las Vegas"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-last-name">State *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="state" type="text" placeholder="NV"
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Zipcode *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="zip" type="text" placeholder="88901"
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
import React, { useState } from 'react';

const OrderPage = () => {
    // State for form data
    const [formData, setFormData] = useState({
        print: '',
        name: '',
        address: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Order Submitted', formData);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Order Your Print</h1>

            <form onSubmit={handleSubmit}>
                {/* Print Selection */}
                <div className="mb-4">
                    <label htmlFor="print" className="block text-sm font-medium text-gray-700">Select Print</label>
                    <select
                        id="print"
                        name="print"
                        value={formData.print}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                        <option value="">Select a print</option>
                        {/* Add options for prints here */}
                        <option value="print1">Print 1</option>
                        <option value="print2">Print 2</option>
                        {/* More options... */}
                    </select>
                </div>

                {/* Customer Information */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Shipping Address"
                        className="w-full h-24 px-4 py-2 border rounded-md md:col-span-2"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Submit Order</button>
            </form>
        </div>
    );
}

export default OrderPage;

import React from 'react';

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Sign Up</h1>
                <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex-1">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="street"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street Name
                        </label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex-1">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="pincode"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Pincode
                            </label>
                            <input
                                type="text"
                                id="pin"
                                name="pincode"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex-1">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Register() {
  return (
    <Layout title="Register">
      <div className="max-w-6xl mx-auto px-8 my-10 register">
        <form className="shadow-md bg-gray-50 rounded-md py-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Register</h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="soo"
              name="soo"
              placeholder="State of Origin"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="sor"
              name="sor"
              placeholder="State of Residence"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar">Upload your passport:</label>
            <br />
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*,.pdf"
              // accept="image/png, image/jpeg, image/jpg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar">Upload a means of identification:</label>
            <br />
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*,.pdf"
              // accept="image/png, image/jpeg, image/jpg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-10">
            <input
              type="password"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <Link
            href="/register"
            className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
          >
            Submit
          </Link>
          <div className="flex mt-5 space-x-5 text-sm">
            <Link
              href="/login"
              className="text-blue-500 hover:underline hover:text-blue-800"
            >
              LOGIN?
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

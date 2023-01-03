import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Login() {
  return (
    <Layout title="Login">
      <div className="max-w-6xl mx-auto px-8 my-10 login">
        <form className="shadow-md bg-gray-50 rounded-md p-7">
          <h1 className="mb-4 text-2xl font-bold">Login</h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="id"
              name="id"
              placeholder="Voter's ID"
            />
          </div>
          <div className="mb-10">
            <input
              type="password"
              className="w-full mt-4 py-2 pl-2 text-gray-700"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <Link
            href="/login"
            className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
          >
            Login
          </Link>
          <div className="flex mt-5 space-x-5 text-sm">
            <Link
              href="/register"
              className="text-blue-500 hover:underline hover:text-blue-800"
            >
              REGISTER?
            </Link>
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline hover:text-blue-800"
            >
              FORGOT PASSWORD?
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

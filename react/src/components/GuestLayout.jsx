import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Navigate, Outlet } from 'react-router-dom'
import { userStateContext } from '../contexts/ContextProvider';

export default function GuestLayout(){

    const {currentUser, userToken} = userStateContext();

    if(userToken){
        return <Navigate to='/' />
    }

    return(
        <div>
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                        />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
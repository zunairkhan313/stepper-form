"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [area, setArea] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        console.log("name", name);
        console.log("email", email);
        console.log("phone", phone);
        console.log("area", area);
        e.preventDefault();

        if (!name || !email || !phone || !area) {
            setError("All fields are necessary.");
            return;
        }
       
        router.push("/acceptRequest");

    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-2 border-black">
                <h1 className="text-center text-xl font-bold my-4">Details</h1>
                <p className="text-center text-sm my-4">We re thrilled at the opportunity to help you grow your business online. <br /> Please let us know the best way to reach you.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                    />
                    <div>

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            placeholder="Phone Number"
                        />
                    </div>
                    <textarea
                        onChange={(e) => setArea(e.target.value)}
                        cols="30"
                        rows="10"
                        type="text"
                        placeholder="Anything else you'd like to share?" />

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <div className="flex justify-center">

                        <button className="w-60 bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                            Send Request
                        </button>
                    </div>
                    <p className="text-center text-sm ">
                        We promise never to share your information or spam your inbox
                    </p>



                </form>
            </div>
        </div>
    )
}
import Link from "next/link";

export default function Request() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-2 border-black">
                <div className="flex justify-center">

                <div style={{width : "104px" , height : "104px", backgroundColor : "green"}}>

                </div>
                </div>
                <h1 className="text-center text-2xl font-bold my-4">Your Request For a Proposal Has <br /> Been Submitted!</h1>
                <div className="my-5">

                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde autem ut ipsam et. <br /> Temporibus quos consequatur sit dolorem est unde necessitatibus pariatur nemo eius odit, <br /> obcaecati repellat placeat? Laudantium, itaque?</p>
                </div>
                <div className="flex justify-center">
                    <Link href={"/"}>
                    <button className="w-60 bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                        Return Home
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
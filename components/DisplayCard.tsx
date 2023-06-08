import { FC } from "react"

const DisplayCard: FC = () => {
    return (
        <div className="w-4/5 h-4/5 bg-cyan-900 rounded-2xl flex flex-col">
            <div className="p-8 flex justify-center">
                <h1 className="font-bold text-2xl">Order Verification Dashboard</h1>
            </div>
        </div>
    )
}

export default DisplayCard;
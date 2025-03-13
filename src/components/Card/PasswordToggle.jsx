import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordToggle({ cvvHidden }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex items-center  ">
            <button onClick={() => setIsVisible(!isVisible)} className="focus:outline-none px-2">
                {isVisible ? <Eye className="w-5 h-6 text-gray-600" /> : <EyeOff className="w-5 h-6 text-gray-600" />}
            </button>
            <span className="text-md font-semibold text-gray-800">
                {isVisible ? cvvHidden : "***"}
            </span>
        </div>
    );
}
import React, {FC} from "react"
import {IoAccessibility} from "react-icons/io5";

export const WeatherWidget: FC = () => {

    return (
        <div className="rounded-full shadow text-lg font-medium text-amber-600">
            Hello Weather
            <IoAccessibility/>
        </div>
    )
}

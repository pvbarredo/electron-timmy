import React, {FC, useEffect, useState} from "react"

const {ipcRenderer} = window.require("electron")
export const CpuWidget: FC = () => {
    const [systemInfo, setSystemInfo ] = useState({cpu: {brand: '', cores: 0}, cpuTemperature: {chipset: 0}})
    useEffect(() => {
        ipcRenderer.send("system_info")
        ipcRenderer.on("system_info", (event: any, arg: any) => {
            console.log(arg)
            setSystemInfo(arg)
            ipcRenderer.removeAllListeners("system_info")
        })
    }, [])

    return (
        <div>
            <div className="cpu_name">
                CPU name: <span id="cpu-name">{systemInfo.cpu.brand}</span>
            </div>
            <div className="cpu_cores">
                CPU cores: <span id="cpu-cores">{systemInfo.cpu.cores}</span>
            </div>
            <div className="cpu_temperature">
                CPU temperature: <span id="cpu-temperature">{systemInfo.cpuTemperature.chipset}</span>
            </div>
        </div>
    )
}

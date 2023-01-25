import React, {FC} from "react"

export const GatherWidget: FC = () => {

    return (
        <div >
            <span>Gather Widget</span>
            <webview id="foo" src="https://app.gather.town/app/eh7xX5F1fajWXcD6/M2"  useragent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
                     style={{height:400, width: 600,display:'inline-flex'}}></webview>

        </div>
    )
}

import React, { useEffect, useRef, memo } from 'react'

function TradingChart() {
    const container = useRef()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
        script.type = 'text/javascript'
        script.async = true
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "2",
          "locale": "en",
          "backgroundColor": "#131722",
          "hide_top_toolbar": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "studies": [],
          "overrides": {},
          "comparisons": [
            { "symbol": "NASDAQ:MSFT", "color": "#FF0000" }
          ],
          "support_host": "https://www.tradingview.com"
        }`
        container.current.appendChild(script)
    }, [])

    return (
        <div className='tradingview-widget-container' ref={container} style={{ height: '100%', width: '100%' }}>
            <div className='tradingview-widget-container__widget'></div>
            <div className='tradingview-widget-copyright'></div>
        </div>
    )
}

export default memo(TradingChart)

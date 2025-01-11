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
          "hide_top_toolbar": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "studies": [],
          "container_id": "tradingview-widget",
          "custom_css_url": "",
          "enabled_features": ["show_comparison"],
          "disabled_features": []
        }`
        container.current.appendChild(script)
    }, [])

    return (
        <div className='tradingview-widget-container' ref={container} style={{ height: '100%', width: '100%' }}>
            <div className='tradingview-widget-container__widget'></div>
        </div>
    )
}

export default memo(TradingChart)

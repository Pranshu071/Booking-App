import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src='https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt="" 
                className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src='https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt="" 
                className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>523 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://images.unsplash.com/photo-1547406683-88dd1d03c425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
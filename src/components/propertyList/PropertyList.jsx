import React from 'react'
import "./propertyList.css"

function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                className="pListImage" />
            <div className="pListTitles">
                <h1>Hotles</h1>
                <h2>233 hotles</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                className="pListImage" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                className="pListImage" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" 
                className="pListImage" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src='https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
                alt="" 
                className="pListImage" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>2331 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
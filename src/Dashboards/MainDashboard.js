import { useState } from "react";
import Cards from "./Cards/Cards";

function MainDashboard() {
    return(
        <div style={{
            width:'100%',
            padding:'20px',
            display:'flex',
            flexDirection:'column',
            textAlign:'center',
            gap:'10px'
        }}>
            <Cards className="mb-4" style={{border:'none'}}/>
        </div>
    )
}

export default MainDashboard
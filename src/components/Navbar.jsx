
const Navbar = () => {


    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"10px 50px", color:"#8B8A8B",  backgroundColor:"#FCF6FF"}}>
            <div><p style={{color:"#B742FF",  fontSize:"30px", fontFamily:"Oxygen", fontWeight:"700"}}>Seker</p></div>
            <ul style={{display:"flex", justifyContent:"space-between", listStyleType:"none", gap:"20px"}}>
                <li>İmages</li>
                <li>Videos</li>
                <li>Maps</li>
                <li>News</li>
                <li>Product</li>
            </ul>
            <div style={{color:"#B742FF", fontWeight:"400", fontSize:"20px"}}><p>Sing in <i class="fas fa-chevron-down"></i>
            </p></div>
        </div>
    )
}

export default Navbar
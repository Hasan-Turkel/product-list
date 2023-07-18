

const Card = ({products}) => {
  return (

    
  <div>
    
    {products?.map((item, i)=>{
            return(
                <div key={i}>
                <img src={item?.image} alt="img" width={"200px"} />
                <h3>{item?.price}</h3>
                <p>{item?.title}</p>
            </div>
                
            )
        })}
    </div>
       
  )
}

export default Card
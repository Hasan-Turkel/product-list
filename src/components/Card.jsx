

const Card = ({things}) => {
  return (

    
  <div className="m-4 row flex-wrap justify-content-center">
    {things?.map((item, i)=>{
            return(
            <div className="col-lg-3 col-md-6"  key={i}>
                <img role="button" src={item?.image} alt="img" width={"200px"} height={"200px"} />
                <h3>{item?.price} $</h3>
                <p>{item?.title}</p>
            </div>
                
            )
        })}
    </div>
       
  )
}

export default Card
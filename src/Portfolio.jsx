

export default function Portfolio() {
  return (
    <>
    <div className="portfolio">
      <h1>My work</h1>
      </div>
      <div className="images">
        <div className="image1">
          <img src="./images/work-1.png" alt="work" width={300} height={400} />
          <div className="work">    
          <div className="work1" style={{textAlign:"center"}}>
            <h3>social media app</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          </div>
          </div>
      
          
        
          <div className="image2">
          <img src="./images/work-2.png" alt="work" width={300} height={400}  />
          <div className="work">       
          <div className="work2" style={{textAlign:"center"}}>
          <h3>app design</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
       
          </div>
          </div> 
      


          <div className="image3">
          <img src="./images/work-3.png" alt="work" width={300} height={400} />
          <div className="work">
          <div className="work3" style={{textAlign:"center"}}>
         <h3>web design</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          </div>
          </div>
          

</div>
      
    

    </>
  )
}

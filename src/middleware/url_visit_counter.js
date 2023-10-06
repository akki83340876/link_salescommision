
// Middleware to count/track visits
const visitCounts = new Map();
exports.visitCounter = async(req, res, next) =>{

  const url = req.originalUrl;
  const count = visitCounts.get(url) || 0;
  visitCounts.set(url, count + 1);
  next();
}

// Define a route to display the visit count
// it is the controller which give the respons in terms of total visit count 
exports.numberOfcount = (req, res) => {
  try{
  const url = req.originalUrl;
  const count = visitCounts.get(url) || 0;
  res.send(`Total visits to ${url}: ${count}`);
  }
  catch(error){
    console.log("error", error)
    return res.status(500).json({message : "Internal server error", error})
  }
};


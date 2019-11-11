
function auth(req, res, next){
  const token = req.header('x-auth-token');
  res.status(401)
}
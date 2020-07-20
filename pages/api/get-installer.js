export default (req, res) => {
  console.log('res', res);
  console.log(req.query);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ installer: 'Setup.exe' }));
  res.sendFile(`/installers/lsdeer_${req.ver}.exe`);
};

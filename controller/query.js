module.exports = [{
  type: 'get',
  '/queryA': (app, req, res) => {
    res.writeHead('200', {
      'Content-Type': 'text/html'
    });
    res.write('<h1>queryA</h1>');
    res.end();
  }
}, {
  type: 'post',
  '/queryB': (app, req, res) => {
    res.writeHead('200', {
      'Content-Type': 'text/html'
    });
    res.write('<h1>queryB</h1>');
    res.end();
  }
}, {
  '/queryC/:id/:name': (app,req, res, parms) => {
    res.writeHead('200', {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      id: parms[0],
      name: decodeURI(parms[1])
    }));
  }
}];
exports.handler = (event, context, callback) => {
  // get the request from the event from Cloud Front
  const {request} = event.Records[0].cf
  // extract the headers
  const {headers = {}, uri} = request
  // we support css and javascript files
  const isSupportedFile = uri.endsWith('.css') || uri.endsWith('.js')
  if (headers && isSupportedFile) {
    let gz = false
    let br = false
    // get the accept-encoding header
    const ae = headers['accept-encoding']
    if (ae) {
      for (let i = 0; i < ae.length; i++) {
        const {value} = ae[i]
        const bits = value.split(/\s*,\s*/)
        if (bits.includes('br')) {
          br = true
          break
        } else if (bits.includes('gzip')) {
          gz = true
          break
        }
      }
    }
    // If br is supported use .br sufffix, .gz for gzip :)
    if (br) request.uri += '.br'
    else if (gz) request.uri += '.gz'
  }
  // execute callback
  callback(null, request)
}

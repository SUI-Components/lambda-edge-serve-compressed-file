# lambda-edge-serve-compressed-file
Lambda@Edge for serving Brotli or Gzipped file according to the Content-Encoding header. It supports CSS and JS files.

## Requirements

1. Use S3 && Cloudfront
2. You MUST upload your CSS & JS files already compressed to the bucked. In other words, you MUST upload the same file three times: without compression, compressed with Brotli (and .br extension), compressed with Gzip (and .gzip compression).
3. You MUST deactivate `gzip` on-the-fly compression from CloudFront settings.
4. Use this Lambda@Edge in order to intercept Requests for CloudFront.

Useful resources:
[Get Lambda Event Source Gist](https://gist.github.com/jeshan/52cb021fd20d871c56ad5ce6d2654d7b)
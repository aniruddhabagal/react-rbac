interface Props {
  title: string
  subTitle: string
  message: string
}

const statusCode: { [key: string]: Props } = {
  '404': {
    title: '404 - NOT FOUND',
    subTitle: '',
    message: '',
  },
  '403': {
    title: '403 - ACCESS DENIED',
    subTitle: "Oops, You don't have permission to access this page.",
    message:
      'A web server may return a 403 Forbidden HTTP status code in response to a request from a client for a web page or resource to indicate that the server can be reached and understood the request, but refuses to take any further action. Status code 403 responses are the result of the web server being configured to deny access, for some reason, to the requested resource by the client.',
  },
  '500': {
    title: '500 - FORBIDEN',
    subTitle: '',
    message: '',
  },
}

export default statusCode

const ErrorFallback = ({ error }: any) => {
  return (
    <div role="alert">
      <p>Something went wrong 😭</p>

      {error.message && <span> {error.message}</span>}
    </div>
  )
}

export default ErrorFallback

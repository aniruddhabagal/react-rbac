import React, { Component } from 'react'

interface FallbackProps {
  error: Error | null
  // resetErrorBoundary: (...args: Array<unknown>) => void
}
interface ErrorBoundaryProps {
  ErrorFallback: React.ComponentType<FallbackProps>
  children: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: any
  error: null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.

    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service like AppSignal
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state
    const { ErrorFallback } = this.props
    const props = { error }

    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorFallback {...props} />
    }

    return this.props.children
  }
}
export default ErrorBoundary

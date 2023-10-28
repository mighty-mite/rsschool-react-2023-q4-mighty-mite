import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('error:', error, errorInfo);
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;

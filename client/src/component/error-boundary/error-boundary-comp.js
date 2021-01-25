import React from 'react';

import ErrorPage from "../404errorpage/404page-comp"

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
       <ErrorPage/>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
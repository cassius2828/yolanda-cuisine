// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    if (this.state.hasError) return this.props.fallback;
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
import React from "react";
import { Alert } from "react-native";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // You can log error details to an error reporting service here
    console.error("Error:", error, "Info:", info);
    Alert.alert("An Error Occurred", error.message || "Something went wrong");
  }

  render() {
    if (this.state.hasError) {
      // You can customize this fallback UI
      return null;
    }
    return this.props.children;
  }
}

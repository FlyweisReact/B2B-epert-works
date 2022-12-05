import React, { Component } from 'react';
import ErrorScreen from './ErrorScreen/ErrorScreen';
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 style={{paddingTop:'100px'}}><ErrorScreen/></h1>
      }
  
      return this.props.children
    }
  }

  export default ErrorBoundary


  

// class ErrorBoundary extends Component {
// constructor(props) {
// super(props);
// this.state = { error: null, errorInfo: null };

// if(this.props.showError === false)
// {
// this.state.error = null;
// this.state.errorInfo = null;
// }
// }

// componentDidCatch = (error, info) => {
// console.log("error did catch");
// this.setState({error: error, errorInfo: info });        
// }

// render() {
// if(this.state.errorInfo) {
// return (
// <div style={{ backgroundColor: '#ffcc99', color: 'white', width: '500px', height: '60px' }}>
// An Error Occurred !
// </div>
// );
// }
// else {
// return this.props.children;
// }
// }
// }

// export default ErrorBoundary;
import React from 'react'
import {Route} from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';
import SubHeader from '../Header/SubHeader/SubHeader';
const RouteWithErrorBoundary = (props) => {

    return (
        <ErrorBoundary key={props.location?.pathname}>
            <SubHeader/>
            <Route {...props} />
        </ErrorBoundary>
    );
};

export default RouteWithErrorBoundary
// const RouteWithErrorBoundary: React.FC<RouteProps> = (props) => {
//     return (
//         <ErrorBoundary key={props.location?.pathname}>
//             <Route {...props} />
//         </ErrorBoundary>
//     );
// };

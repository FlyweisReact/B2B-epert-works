import { MenuItems as defaultMenuItems } from "../component/Header/Navbar/MenuItems"
export class RestClient {

    public async postCall(requestUri: string, payload: string, authToken?: any, authType?: string, method?: string) {
        let header: any
        authType = authType ? authType : 'Bearer';
        if (authToken && authType === "Bearer")
            header = {
                'Content-Type': 'application/json',
                'Authorization': `${authType} ${authToken}`
            }
        else if ((authToken && authType === "Basic"))
            header = { 'Authorization': `${authType} ${authToken}` }

        else
            header = { 'Content-Type': 'application/json' }
        const requestOptions = {
            method: method ? method : 'POST',
            headers: header,
            body: payload
        };
        try {
            const response = await fetch(requestUri, requestOptions);
            let responseData = await response.json();
            if (responseData["error"] === 'invalid_token') {
                let newTokensjson = await this.refreshToken(localStorage.getItem("refresh_token"))
                let newacesstoken = newTokensjson["access_token"];
                let newrefreshtoken = newTokensjson["refresh_token"];
                localStorage.setItem("access_token", newacesstoken);
                localStorage.setItem("refresh_token", newrefreshtoken);
                localStorage.setItem("NewTokens", "yes");

                let newResponse = await this.postCallOrginal(requestUri, payload, newacesstoken, authType, method);
                if (responseData.hasOwnProperty('error') && (responseData('error') === 'unauthorized' || responseData('error') === 'invalid_grant'))
                throw new Error('something wrong throw error')
                responseData = newResponse;
            }
            //console.log(responseData.responseCode);

            return responseData;
        }
        catch (e) {
            alert('Your session has expired or You have an active session in a different screen or Browser.');
            localStorage.setItem('menuItems', JSON.stringify(defaultMenuItems))
            // dispatch(actions.storeMenuItems(defaultMenuItems));

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            localStorage.removeItem('menuItems');
            window.location.href = window.location.origin
        }

    }

    public async getCall(requestUri: string, token?: any) {
        const loggedInUser: any = localStorage.getItem("access_token");
        //token = JSON.parse(loggedInUser);
        const requestOptions: any = {
            method: 'GET',
            /*body: JSON.stringify({ "username": userName,
                                    "password":  password})*/
        };
        if (token) {
            requestOptions.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
        } else {
            requestOptions.headers = { 'Content-Type': 'application/json' };
        }
        try {
            debugger;
            const response = await fetch(requestUri, requestOptions);
            let responseData = await response.json();
            if (responseData["error"] === 'invalid_token') {
                let newTokensjson = await this.refreshToken(localStorage.getItem("refresh_token"))
                // alert("Get Call Token Expitred");
                let newacesstoken = newTokensjson["access_token"];
                let newrefreshtoken = newTokensjson["refresh_token"];
                localStorage.setItem("access_token", newacesstoken);
                localStorage.setItem("refresh_token", newrefreshtoken);
                localStorage.setItem("NewTokens", "yes");
                //alert ("newacesstoken : " +newacesstoken);

                let newResponse = await this.getCallOrginal(requestUri, newacesstoken)
                responseData = newResponse;
                if (responseData.hasOwnProperty('error') && (responseData('error') === 'unauthorized' || responseData('error') === 'invalid_grant'))
                throw new Error('something wrong throw error')
            }
            console.log('error token', responseData)
           
            // if(responseData.hasOwnProperty('error')) return null
            return responseData;

        }
        catch (e) {
            alert('Your session has expired or You have an active session in a different screen or Browser.             ');
            localStorage.setItem('menuItems', JSON.stringify(defaultMenuItems))
            // dispatch(actions.storeMenuItems(defaultMenuItems));

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            localStorage.removeItem('menuItems');
            window.location.href = window.location.origin
        }


    }

    public async putCall(requestUri: string, payload: string, authToken?: any) {
        let header: any
        if (authToken)
            header = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        else
            header = {
                'Content-Type': 'application/json'
            }
        const requestOptions = {
            method: 'PUT',
            headers: header,
            body: payload
            /*body: JSON.stringify({ "username": userName,
                                    "password":  password})*/
        };
        const response = await fetch(requestUri, requestOptions);
        const responseData = await response.json();
        //console.log(responseData.responseCode);
        return responseData;
    }

    public async deleteCall(requestUri: string, payload: string, authToken?: any) {
        let header: any
        if (authToken)
            header = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        else
            header = {
                'Content-Type': 'application/json'
            }
        const requestOptions = {
            method: 'DELETE',
            headers: header,

            /*body: JSON.stringify({ "username": userName,
                                    "password":  password})*/
        };
        const response = await fetch(requestUri, requestOptions);
        const responseData = await response.json();
        //console.log(responseData.responseCode);
        return responseData;
    }

    public async getCallOrginal(requestUri: string, token?: any) {
        const requestOptions: any = {
            method: 'GET',
        };
        if (token) {
            requestOptions.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
        } else {
            requestOptions.headers = { 'Content-Type': 'application/json' };
        }
        try {
            const response = await fetch(requestUri, requestOptions);
            const responseData = await response.json();

            console.log("from Get Call responseData : " + JSON.stringify(responseData))


            // if(responseData.hasOwnProperty('error')) return null
            return responseData;

        }
        catch (e) {
            alert('something went wrong')
        }

    }

    public async postCallOrginal(requestUri: string, payload: string, authToken?: any, authType?: string, method?: string) {
        let header: any
        authType = authType ? authType : 'Bearer';
        if (authToken && authType === "Bearer")
            header = {
                'Content-Type': 'application/json',
                'Authorization': `${authType} ${authToken}`
            }
        else if ((authToken && authType === "Basic"))
            header = { 'Authorization': `${authType} ${authToken}` }

        else
            header = { 'Content-Type': 'application/json' }
        const requestOptions = {
            method: method ? method : 'POST',
            headers: header,
            body: payload
            /*body: JSON.stringify({ "username": userName,
                                    "password":  password})*/
        };
        try {
            const response = await fetch(requestUri, requestOptions);
            const responseData = await response.json();
            //console.log(responseData.responseCode);

            return responseData;
        }
        catch (e) {
            alert('something went wrong')
        }

    }

    public refreshToken = async (refreshToken: any) => {

        const authToken = btoa('client:secret');
        const authType = 'Basic';
        let response = await fetch('https://auth.expert-works.com/oauth/token?grant_type=refresh_token&refresh_token=' + refreshToken,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authType} ${authToken}`
                },

            })
        let data = await response.json()
        return data
    }

}

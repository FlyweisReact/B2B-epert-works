import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./PartnerTable.css"
import { RestClient } from "../../../../util/RestClient"
import { RootState } from "../../../../redux/reducers/index";
import "../../UserEntitlement/Users/UserEntitlement.css"
import { ProdConfiguration } from "../../../../util/restConstants";
import * as actions from "../../../../redux/actions"
const productSpecification = [
    {
        productType: "abc", contents: [
            { type: "abc", count: 231 },
            { type: "abc", count: 56 },
            { type: "abc", count: 54 },
            { type: "abc", count: 544 },
            { type: "abc", count: 54 },
            { type: "abc", count: 564 },
            { type: "abc", count: 4 },
            { type: "abc", count: 4564 },
            { type: "abc", count: 4531 },
            { type: "abc", count: 234 },
            { type: "abc", count: 57 },
            { type: "abc", count: 7 }
        ]
    }
];
export default function PartnerTableNew() {
    const dispatch = useDispatch();
    let authState: any = useSelector((state: RootState) => state.authToken);
    let userData: any = useSelector((state: RootState) => state.userEntitlementReducer);
    useEffect(() => {

        //apicall()
        dispatch(actions.fetchPartners(authState))

    }, [])
    const getTableContent = (arr: any) => {
        
        const iterateItem = (item: any) => {
            return item.map(function (nextItem: any, j: any) {
                return (
                    <tr key={nextItem.type}>
                        <td>{nextItem.type}</td>
                        <td>{nextItem.count}</td>
                    </tr>
                );
            })
        }
        return arr.map(function (item: any, i: any) {
            return (
                <>
                    <thead>{item.productType}</thead>
                    <tbody>
                        <tr key={item.email}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    </tbody>
                </>
            );
        });
    };

    return (
       
            <div>
                <table className="custom-table">
                    {getTableContent(userData.partnerData || [])}
                </table>
            </div>
        
       
    )
}

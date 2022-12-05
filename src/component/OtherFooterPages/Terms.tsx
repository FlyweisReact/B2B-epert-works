import React,{useEffect} from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Terms() {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return (
        <div  className="no-scroll">

            <Navbar/>
            <div className="testimonal-bg">

            <div className="section-heading">
                <h2>   <em>
                    Terms and Conditions

                </em></h2>
            </div>
            <div className="terms">
                <div className="policy-align-justify"><p><strong>Limitation of liability:</strong> In case you’ve chosen a wrong subscription plan, email to support@expert-works.com within 24 hrs of your purchase or else the                 option to change the subscription plan will not be given. The invoice has to be mailed in case you want to cancel and choose another plan. Refunds will not be initiated.</p></div>
                <div className="policy-align-justify"><p><strong>Intellectual property:</strong> In case of any misuse of the Expert-Works trademark, one can be legally prosecuted. The Expert-Works trademark cannot be                  used to degrade the company’s reputation or used for personal benefits.</p></div>
                <div className="policy-align-justify"><p>Pricing, Payments, and other terms and conditions:<br /><br />

                    The price on the website is the final price that you have to pay including tax. The entire summary breakup will be shown before you check out. In case of any offers or discounts, the                        price will be clearly shown on the website. In case of any discrepancy, contact us immediately.<br /><br />

                    Payment options will be shown before checking out and once selected cannot be changed. Your summary will be sent to the email id that you provide and any other notification will be                         sent via text message or email. <br /><br />

                    There is no refund. For exchanges or damaged items, please refer to the return policy.</p></div>
                <div className="policy-align-justify"><p><strong>Product Information:</strong> All the information about the products on the website of Expert-Works will be displayed. Any third party website might provide                  false information which Expert-Works is not responsible for.</p></div>
                <div className="policy-align-justify"><p><strong>Dispute Resolution:</strong> In case of any dispute, it will be resolved on a call or via email with managers or senior officials from Expert-Works. If the                  dispute is not resolved, the matter will be legally prosecuted. Any behavior that can be considered to be misfit will not be tolerated and also can be led to prosecution.</p></div>


            </div>
        </div>
        <Footer/>
        </div>

    )
}

import React,{useState,createContext} from 'react'
export const MyContext=createContext()

const MainContext = (props) => {
    const [main,setmain]=useState({
        software:{
            title:'Software & Hi-tech',
            heading:'Technology is only as good as the experience it enables.',
            writup:'Deliver exceptional end-to-end customer experiences while increasing the value of your products and services with process transformation from Limited Seal. From leveraging analytic insights and unlocking operational improvements to solving complex service and support issues, we help leaders in technology drive adoption, increase loyalty, and deliver new sources of revenue.',
            subHeading1:'Online Companies',
            subWritup1:'Solutions that help e-businesses develop, commercialize, monetize and evolve their digital operations.',
            subHeading2:'High-Tech Manufacturers',
            subWritup2:'We help high-tech manufacturers take on complex, transformational business process and product engineering initiatives.',
                
        },
        finance:{
            title:'Banking & Financial',
            heading:'When it comes to financial matters, customer engagement matters more than ever.',
            writup:'From delivering excellent services at all stages of a loan to keeping pace with regulatory requirements, our technology-enabled solutions are tailored to meet the demands of your organization & your customers.',
            subHeading1:'Retail & Wholesale Banking',
            subWritup1:'Our solutions optimize core processes for consumer lending, commercial lending, financial messaging and transaction banking.',
            subHeading2:'Consumer Lending',
            subWritup2:'Solutions for financial institutions addressing business and technology challenges across the mortgage, auto and student loan.',
            subHeading3:'Cards & Payments',
            subWritup3:'Includes card management and payment processing services for credit, debit, private label and smart cards.'
        },
        healthcare:{
            title:'Life Sciences & Healthcare',
            heading:'We transform processes to work smarter for healthcare organizations and their consumers.',
            writup:'Whether it’s easing the claims burden, reducing waste or improving experiences, our analytics-driven, technology-enabled solutions are tailored to meet the demands of the new era of digital health.',
            subHeading1:'Medical Devices',
            subWritup1:'We work with industry leaders to improve product development and manufacturing processes across key operational functions.',
            subHeading2:'Pharmaceuticals & Biotech',
            subWritup2:'Changes in the pharmaceuticals and biotech industries demand new thinking by those looking to rationalize costs.',
            subHeadiing3:'Government & Public Health Programs',
            subWritup:'How will you balance competing priorities and manage member volume? We help you adapt to the unexpected requirements the future.',

        },
        travel:{
            title:'Travel & Hospitality',
            heading:'Keep costs down, schedules tight, and demanding customers satisfied. Check, check, and check.',
            writup:'Our technology-enabled solutions transform the highly complex processes involved in getting people and things where they need to be without fail or delay',
            subHeading1:'Real Estate & Property Services',
            subWritup1:'Transform Real Estate services and deliver real value to your customers with our innovative solutions and deep industry expertise.',
            subHeading2:'Travel Intermediaries',
            subWritup2:'Our team has years of experience with Global Distribution System (GDS) platforms, as well as Retail and Online Travel companies.',
            subHeading3:'Travel Supplies',
            subWritup3:'Limited Seal is a top service provider to the entire Travel Ribbon, serving airlines, hotel operators and vacation ownerships.',
        },
        verticals:{
            title:'Emerging Verticals',
            heading:'We are Expanding our Capabilities in Key Emerging Verticals',
            writup:'From spearheading Digital Engagement initiatives to facilitating completely new business models, we drive digital business forward in these key segments.',
            subHeading1:'Oil & Gas',
            subWritup1:'Built on our experience with early smart grid adopters, Cognizant’s Smarter Utilities solutions are designed to maximize the benefits from smart grid investments.            ',
            subHeading2:'Customer Experience Management',
            subWritup2:'We help the utility industry address a wide range of challenges and gain premier customer experience and cost optimization.            ',
            subHeading3:''
        },
        isLogedIn:false,
        name:'',
        user:{
            name:'steve'
        /*isLogedIn:false,
        firstName:'',
        lastName:'',
        email:'',
        passWord:'',
        pin:"",
        plan:[]*/

        }
    })
    return (
        <div>
            <MyContext.Provider value={[main,setmain]}>
                {props.children}
            </MyContext.Provider>
            
        </div>
    )
}

export default MainContext

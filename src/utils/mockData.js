import { GiAutoRepair } from "react-icons/gi";
import { MdDomainAdd, MdSelfImprovement } from "react-icons/md";
import ServiceOne from "../assets/images/s1.png";
import Servicetwo from "../assets/images/s2.png";
import Servicethree from "../assets/images/s3.png";
import ClientOne from "../assets/images/client-1.jpg";
import ClientTwo from "../assets/images/client-2.jpg";

export const featureCardData = [
    {
        title:'Repaier',
        icon:GiAutoRepair,
    },
    {
        title:'Improve',
        icon:MdSelfImprovement
    },
    {
        title:'Maintain',
        icon:MdDomainAdd
    }
]

export const ServiceCardData = [
    {
        title:'Repaier',
        image:ServiceOne,
        description:''
    },
    {
        title:'Improve',
        image:Servicetwo,
        description:''
    },
    {
        title:'Maintain',
        image:Servicethree,
        description:''
    }
]

export const clinetSliderData = [
    {
        clientName:"Jhon Doe",
        image:ClientOne,
        aboutClient:"chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"   
    },
    {
        clientName:"Martina",
        image:ClientTwo,
        aboutClient:"chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"   
    },
    {
        clientName:"Harsha Bogle",
        image:ClientOne,
        aboutClient:"chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"   
    },
    {
        clientName:"justin langer",
        image:ClientTwo,
        aboutClient:"chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem"   
    }
]
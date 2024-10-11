import Service from "@/components/ui/Services/services_header";
import Form from "@/components/ui/Services/services_form";

export default function servicesPage(){
    const services = [
        {name: "Consultations"},
        {name:"Medical check-up"},
        {name:"Emergency"},
        {name:"Surgery"},
        {name:"Home Services"},
        {name:"Physical medicines & Rehabilitations"},
        {name:"Laboratory"},
        {name:"Blood test"},
        {name:"Urine analysis"},
        {name:"Stood analysis"},
        {name:"Sputum analysis"},
        {name:"Culture"},
        {name:"Anapath"},
        {name:"Other medical specimens"},
        {name:"Imagery"},
        {name:"Ultrasound"},
        {name:"X-Ray"},
        {name:"CT-Scan"},
        {name:"MRI"},

    ];
    return(
        <div>
            <Service />
            <Form services = {services} />
        </div>
    );
}
interface Service {
  name: string;
}

export default function Form(props: { services: Service[] }){
  return(
    <div className="flex justify-center items-center">
      <ul
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="doctor"
      >
        {props.services.map((service, index) => (
          <li
            key={index}
            className="py-2 px-3 text-blue-600 hover:bg-gray-100 hover:text-blue-800 text-center"
          >
            {service.name}
          </li>
        ))}
      </ul>
    </div>    
  );
}
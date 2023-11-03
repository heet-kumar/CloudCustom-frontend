import { useRouter } from "next/router";
import style from '../../styles/service.module.css'
import { useEffect, useState } from "react";
import { HiChip } from 'react-icons/hi'
import { MdCreate } from "react-icons/md";
import Multiselect from "multiselect-react-dropdown";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";


// component
import SubServiceCard from '../../components/subServiceCard';

// fields
import fields from '../../data/field.json';


const Service: React.FC = () => {

    const route = useRouter();
    const root = route.query;
    // console.log("Root : ",root.service);


    const [serviceData, setServiceData] = useState(
        {
            "id": 2,
            "name": "Pub/Sub",
            "dsc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    )

    // useEffect( () => {
    //     const data = localStorage.getItem('Access');
    //     if(data!=='true') route.push("/")
    // },[])


    const fieldList: string[] = fields;

    const [serviceName, setServiceName] = useState<string>("");
    const [desc, setdesc] = useState<string>("");
    const [field, setfield] = useState<Array<string>>([]);

    const [subServices, setSubServices] = useState<Array<{ id: number, sid: number, name: string, dsc: string, columns: string }>>([
        {
            id: 100,
            sid: 30,
            name: "Virtual Machine",
            dsc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            columns: '["Name","Region","Machine Family","CPUs","Memory","Boot Disk Size","OS","Allow traffic"]'
        },
        {
            id: 101,
            sid: 30,
            name: "Kubernate Engine",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            columns: '["Name","Region","Machine Family","CPUs","Memory","Boot Disk Size","OS","Allow traffic"]'
        },
        {
            id: 103,
            sid: 30,
            name: "Kubernate Engine",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            columns: '["Name"]'
        },
    ])

    const handleServiceName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value.toLowerCase());
        setServiceName(e.currentTarget.value.toLowerCase());
    }

    const handleDescName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setdesc(e.currentTarget.value);
    }

    const handleCreate = async () => {
        // setSubServices([...subServices,{name: serviceName,desc:desc,fields: field}])

    }


    return (

        <div className={style.service}>

            {/* Modal */}

            <button
                type="button"
                className="fw-bolder fs-5 btn btn-primary align-self-end mx-5 my-3"
                data-bs-toggle="modal"
                data-bs-target="#SubServiceModal"
            >
                <MdCreate /> Create Sub-Service
            </button>

            <div className="modal fade" id="SubServiceModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Sub Service</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingService"
                                    onChange={handleServiceName}
                                    placeholder="Enter Service Name"
                                />
                                <label htmlFor="floatingService">Service Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingService"
                                    onChange={handleDescName}
                                    placeholder="Enter Service Name"
                                />
                                <label htmlFor="floatingService">Description</label>
                            </div>
                            <Multiselect
                                isObject={false}
                                onKeyPressFn={function noRefCheck() { }}
                                onRemove={(e) => { setfield(e); console.log(e); }}
                                onSearch={function noRefCheck() { }}
                                onSelect={(e) => { setfield(e); console.log("Testing : ", e); console.log("JSON STRING : ", JSON.stringify(e)); }}
                                options={fieldList}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleCreate}
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Basic container */}

            <div className={style.service_container}>
                <div className="shadow card w-100 mb-3">
                    <div className="card-body">
                        <h3 className="text-capitalize text-light-emphasis card-title fs-1 fw-bolder mb-3">{root.service}</h3>
                        <p className="card-text fs-5 fw-500">{serviceData?.dsc}</p>
                    </div>
                </div>

                <div className="w-100 p-4 mt-4 d-flex flex-column shadow rounded border">
                    {
                        subServices.map((p) => { return (<SubServiceCard key={p.id} data={p} />) })
                    }
                </div>
            </div>
        </div>

    );
}

export default Service;

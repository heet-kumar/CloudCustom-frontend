
import { useEffect, useState } from 'react';
import styles from '../../styles/dashboard.module.css' 
import { MdCreate } from 'react-icons/md'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import ServiceCard from '@/components/serviceCard';


interface serviceData {
    id: number,
    name: string,
    desc: string
}

const Dashboard:React.FC = () => {

    const router = useRouter();

    const [service,setservice] = useState<string>("");
    const [desc,setdesc] = useState<string>("");
    const [state,setState] = useState<boolean>(true);

    const handleService = (e:React.ChangeEvent<HTMLInputElement>) => {
        setservice(e.currentTarget.value);
    }

    const handleDesc = (e:React.ChangeEvent<HTMLInputElement>) => {
        setdesc(e.currentTarget.value);
    }
    
    const data = useSelector((state) => state.service.user_services);


    // useEffect( () => {
    //     const data = localStorage.getItem('Access');
    //     if(data!=='true') router.push("/")
    // },[])

    // useEffect( () => {
    //     const getData = async() => {
    //         console.log("Inside UseEffect");
    //         await axios.get("http://localhost:5000/services/all")
    //         .then( res => {
    //             console.log(res.data.msg);
    //             setdata(res.data.msg)
    //         })
    //         .catch( err => {
    //             console.log(err);
    //             alert(err.response.data.msg);
    //         })
    //     }
    //     getData();
    // },[state])

    const handleCreate = async () => {
        

        // await axios.post("http://localhost:5000/services/create",{
        //     name:service.toLowerCase(),
        //     dsc:desc
        // }).then( async(res) => {
        //     console.log(res);
        //     setState(!state);
        // })
        // .catch( err => {
        //     console.log(err);
        //     alert(err.response.data.msg);
        // })
        
    }

    const deleteCard = async(id:number) => {
        const newdata = data.filter( p => p.id !== id);
        setdata(newdata);

        // await axios.delete(`http://localhost:5000/services/delete/${id}`)
        // .then( async(res) => {
        //     console.log(res);
        //     setState(!state);
        // })
        // .catch( err => {
        //     console.log(err)
        //     alert(err.response.data.msg);
        // })
    }

    const handleUpdate = async(id:number,name:string,dsc:string) => {
        // await axios.put("http://localhost:5000/services/edit",{id,name,dsc})
        // .then( res => {
        //     // console.log(res.data.msg);
        //     setState(!state);
        // })
        // .catch( err => {
        //     console.log(err);
        //     alert(err.response.data.msg);
        // })
    }

    const [editData,setEditData] = useState<serviceData>({
        sid: 40,
        name: "Dummy Data",
        desc: "Dummy Data Description"
    })

    const handleEdit = (id:number) => {
        // const newData:serviceData[] = data.filter( p => p.id===id);
        // setEditData(newData[0]);
        // setdesc(newData[0].desc);
        // setservice(newData[0].name);
    }

    return(
        <div className={styles.dashboard }>

            {/* Modal Code */}

            <button 
                type="button" 
                className="fw-bolder fs-5 btn btn-primary align-self-end mx-5 my-3" 
                data-bs-toggle="modal" 
                data-bs-target="#ServiceModal"
            >
                <MdCreate /> Create Service
            </button>

            <div className="modal fade" id="ServiceModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Service</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingService" 
                                onChange={handleService}
                                placeholder="Enter Service Name" 
                                value={service}
                            />
                            <label htmlFor="floatingService">Service Name</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingDesc" 
                                onChange={handleDesc}
                                placeholder="Short Description"
                                value=""
                            />
                            <label htmlFor="floatingDesc">Short Description</label>
                        </div>
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

            {/* Edit Modal */}

            {/* <div className="modal fade" id="tryModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Service</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingService" 
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setservice(e.target.value);
                                }}
                                placeholder="Enter Service Name"
                                value={service}
                            />
                            <label htmlFor="floatingService">Service Name</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingDesc" 
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setdesc(e.target.value);
                                }}
                                placeholder="Short Description" 
                                value={desc}
                            />
                            <label htmlFor="floatingDesc">Short Description</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => handleUpdate(editData.id,service,desc)}
                            data-bs-dismiss="modal"
                        >
                            Save Edit Changes
                        </button>
                    </div>
                    </div>
                </div>
            </div> */}

            {/* Basic container */}

            <div className={styles.dashboard_container}>
                {
                    data.map((p:serviceData) => <ServiceCard key={p.name} id={p.id} name={p.name} desc={p.desc} />)
                }
            </div>
        </div>
    );
}

export default Dashboard;
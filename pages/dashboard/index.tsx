
import { useEffect, useState } from 'react';
import styles from '../../styles/dashboard.module.css' 
import { MdCreate } from 'react-icons/md'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCard from '@/components/serviceCard';
import { add } from '@/store/slice/serviceSlice';


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
    const dispatch = useDispatch();
    
    const data = useSelector((state) => state.service.user_services);

    const handleCreate = async () => {
        
        console.log("New Service Data : ",{service,desc});
        dispatch(add({name:service,desc}));
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
                                onChange={(e) => setservice(e.target.value)}
                                placeholder="Enter Service Name"
                            />
                            <label htmlFor="floatingService">Service Name</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingDesc" 
                                onChange={(e) => setdesc(e.target.value)}
                                placeholder="Short Description"
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
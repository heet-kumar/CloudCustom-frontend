import styles from '../styles/dashboard.module.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc'
import Link from 'next/link';
import { useState } from 'react';

interface cardData{
    id: number,
    name: string,
    desc: string
}

const ServiceCard: React.FC<cardData> = (p) => {

    // console.log("Card Data : ",p);
    const [service,setservice] = useState<string>("");
    const [desc,setdesc] = useState<string>("");

    return(
        <>
            {/* Edit Modal */}

            <div className="modal fade" id="tryModal" aria-hidden="true">
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
            </div>

            <div key={p.name} className={styles.card}>
                <div className='card'>
                    <div className="card-header d-flex justify-content-between">
                        <button className='btn' data-bs-toggle="modal" data-bs-target="#tryModal" onClick={() => handleEdit(p.id)} ><FaEdit size={'20'} /></button>
                        <button className='btn' onClick={() => deleteCard(p.id)}><AiFillDelete size={'25'} /></button>
                    </div>
                    <Link href={`/dashboard/${p.name.toLowerCase()}`} className='text-decoration-none text-black'>
                        <div className="card-body rounded shadow-lg p-4 d-flex flex-column align-items-center text-center">
                            <div className={styles.logo}><FcServices size={'80'}/></div>
                            <h5 className="card-title fs-3 mt-4 text-capitalize">{p.name}</h5>
                            <p className="fw-500 mt-3">{p.desc}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;
import styles from '../styles/dashboard.module.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc'
import Link from 'next/link';

interface cardData{
    id: number,
    name: string,
    desc: string
}

const ServiceCard: React.FC<cardData> = (p) => {

    // console.log("Card Data : ",p);

    return(
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
    );
}

export default ServiceCard;
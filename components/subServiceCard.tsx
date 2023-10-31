import { HiChip } from 'react-icons/hi';
import styles from '../styles/service.module.css';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

interface subService {
    id: number,
    sid: number,
    name: string,
    dsc: string,
    columns: string,
}

interface subServiceData {
    data: SubService
}

const SubServiceCard:React.FC<subServiceData> = ({data}) => {

    return(
        <>
            <div className="shadow card w-100 mb-4 d-flex flex-row justify-content-between ">
                <Link href={`/service/${data.name.toLowerCase()}`} className="text-decoration-none text-black">
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center"><HiChip color={'#dc3545'} size={'50'}/></div>
                        <div className="card-body">
                            <h5 className="card-title fs-3 mx-4 text-capatalize">{data.name}</h5>
                            <ul className="d-flex flex-wrap">
                                {
                                    // data.columns
                                    // JSON.parse(data.columns).map( (d:string) => <li key={d} className="mx-4">{d}</li>);
                                    // console.log("Test : ",data.columns);
                                    JSON.parse(data.columns).map( (d:string) => {
                                        return(
                                            <li key={d} className="mx-4">{d}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Link>
                <div className="card-footer border-none d-flex flex-column justify-content-evenly">
                    <button className='btn' onClick={() => editcard(data.name)}><FaEdit size={'20'} /></button>
                    <button className='btn' onClick={() => deleteCard(data.ssid)}><AiFillDelete size={'25'} /></button>
                </div>
            </div>
        </>
    );
}

export default SubServiceCard;
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
function Item({ title, descrip, date, id, toggleCheckbox, checked, Delete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit ,setEdit]=useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (id) => {
    Delete(id)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="All-Task" style={{ border: !checked ? '2px solid green' : '2px solid red' }}>
      <div className="chaek-box">
        <div className="bar-home">
          <input type="checkbox" onClick={() => toggleCheckbox(id)} />
          <h3 style={{ textDecoration: !checked ? 'line-through' : '' }}>{title} </h3>
        </div>
        <div className="edit-delete">
          <Link to={`/edit/${id}`}><i className='edit-icon' style={{cursor:"pointer"}}><FaEdit /></i></Link>
          <i className='delete-icon'
            onClick={showModal} style={{ cursor: "pointer" }}><MdDeleteForever /></i>
          <Modal
            title="Confirm Delete"
            visible={isModalOpen}
            onOk={() => handleOk(id)}
            onCancel={handleCancel}
            okText="Delete"
            cancelText="Cancel"
            className='model_de'
          >
            <p>Do you want delete item?</p>
          </Modal>
        </div>
      </div>
      <div className="Descrip">
        <p>{descrip}</p>
      </div>
      <p className='date'> date : {date}</p>
    </div>
  )
}

export default Item
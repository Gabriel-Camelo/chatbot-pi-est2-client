
import ReactModal from 'react-modal';

const PopupAlert = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          background: 'white',
          borderRadius: '4px',
          padding: '0px',
          maxWidth: '350px',
          maxHeight: '25vh',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        },
      }}
    >

      <div className='bg-redfooter w-full h-1/6 flex items-center justify-center text-white font-roboto font-bold text-lg'>
        <h1>ALERTA!</h1>
      </div>

      <div className='flex items-end pl-9 w-full h-3/6 text-lg'>
        <h3>Tem certeza que deseja remover o conteúdo?</h3>
      </div>

      <div className=' w-full h-2/6 flex justify-around font-roboto font-extrabold text-white pt-4'>
        <button className='w-2/6 bg-redfooter h-6'
          onClick={onClose}
          >NÃO</button>
        <button className='w-2/6 bg-footer h-6'
          onClick={onClose}
          >SIM</button>

        </div>
    </ReactModal>
  );
};

export default PopupAlert;




// import React from 'react';

// const Popup = ({ onClose }) => {
//   return (
//     <div className="bg-black text-white absolute w-screen h-screen flex justify-center items-center z-50">
//       <div className="popup-content bg-redfooter w-72 h-72 ">
//         <button onClick={onClose}>Fechar</button>
//         <p>Conteúdo do pop-up</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;
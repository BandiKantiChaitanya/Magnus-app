import React from 'react'

function PopupModal() {
  return (
    <div className='modal modal-fade' id='popupModal' >
        <div className="modal-dialog modal-lg"  >
            <div className="modal-content ">
                <div className="modal-header">
                    <h5 className="modal-title text-center w-100" >Popup One</h5>
                    <button type="button" className=" btn btn-close" data-bs-dismiss="modal" ></button>
                </div>
                <div className="modal-body">
                    <p>Popup One body..</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-danger btn-clos'  data-bs-dismiss="modal" >Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopupModal
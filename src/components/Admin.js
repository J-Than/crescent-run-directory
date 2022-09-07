import React, { useState } from "react";

function Admin({ loggedIn, onSubmit }) {

  const [newEntry, setNewEntry] = useState(
    {
      lot: "",
      multiple: "",
      firstName: "",
      lastName: "",
      partnerName: "",
      displayName: "",
      petName: "",
      photoUrl: "",
      notes: ""
    })

  function handleNewSubmit(e) {
    e.preventDefault();
    let lotInt = parseInt(newEntry.lot, 10);
    lotInt = lotInt ? lotInt : 0;
    const updateEntry = { ...newEntry, lot: lotInt }
    onSubmit(updateEntry);
    setNewEntry({
      lot: "",
      multiple: "",
      firstName: "",
      lastName: "",
      partnerName: "",
      displayName: "",
      petName: "",
      photoUrl: "",
      notes: ""
    })
  }

  function handleUpdate(e) {
    const updateEntry = { ...newEntry, [e.target.name]: e.target.value }
    setNewEntry(updateEntry);
  }

  if (loggedIn) {
    return (
      <div className="Admin">
        <h3>Welcome, Admin!</h3>
        <h4>Please use the form below to add new residents.</h4>
        <form onSubmit={handleNewSubmit}>
          <label>
            Lot Number: 
            <input
              type="text"
              name="lot"
              placeholder="Lot"
              onChange={handleUpdate}
              value={newEntry.lot}
              >
            </input>
          </label>
          <br />
          <label>
            Owner First Name: 
            <input
              type="text"
              name="firstName"
              placeholder="First Name (used for sorting only)"
              onChange={handleUpdate}
              value={newEntry.firstName}
              >
            </input>
          </label>
          <br />
          <label>
            Owner Last Name: 
            <input
              type="text"
              name="lastName"
              placeholder="Last Name (used for sorting only)"
              onChange={handleUpdate}
              value={newEntry.lastName}
              >
            </input>
          </label>
          <br />
          <label>
            Partner/Spouse Full Name: 
            <input
              type="text"
              name="partnerName"
              placeholder="Partner or spouse name if applicable"
              onChange={handleUpdate}
              value={newEntry.partnerName}
              >
            </input>
          </label>
          <br />
          <label>
            Directory Display Name: 
            <input
              type="text"
              name="displayName"
              placeholder="This is how the name(s) will appear in the directory"
              onChange={handleUpdate}
              value={newEntry.displayName}
              >
            </input>
          </label>
          <br />
          <label>
            Pet Names: 
            <input
              type="text"
              name="petName"
              placeholder="List all pets here"
              onChange={handleUpdate}
              value={newEntry.petName}
              >
            </input>
          </label>
          {/* <br />
          <label>
            Photo URL: 
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter URL for relevant photo"
              onChange={handleUpdate}
              value={newEntry.photoUrl}
              >
            </input>
          </label> */}
          <br />
          <label>
            Notes: 
            <input
              type="text"
              name="notes"
              placeholder="These will not display but are for internal notekeeping"
              onChange={handleUpdate}
              value={newEntry.notes}
              >
            </input>
          </label>
          <br />
          <br />
          <button type="submit">Add Resident</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Admin">
        <h4>Please enter your Username and Password to access the admin section.</h4>
      </div>
    )
  }
}

export default Admin;
